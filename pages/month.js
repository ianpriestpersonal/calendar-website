import Link from 'next/link';
import {Month} from '/components/date'

export async function getServerSideProps(context) {

    var params = []

    if ( context.query.year )
        params.push("year="+context.query.year);
    if ( context.query.month )
        params.push("month="+context.query.month);

    var query = "";
    if ( params.length > 0 ) {
        query = "?" + params.join("&");
    }

  const res = await fetch(process.env.API_URL + '/calendar/month' + query);
  const cal = await res.json()

  return {
    props: { cal },
  };
}

export default function MonthPage({cal}) {
  return (
      <div class="main">
          <div class="title row"><Month data={cal}/>
            <Link
                href={{
                  pathname: '/year',
                  query: { year: cal.year },
                }}
            >
                {cal.year}
            </Link>
          </div>
          <div class="row description">{cal.oldMonth.oldName}, {cal.oldMonth.meaning}</div>
          <div class="row">
              {cal.runicMonth.map((runicDay, index) => (
                <div class="day-container">
                <div>{index+1}</div>
                <div>{runicDay.day.symbol}</div>
                <div>{runicDay.newMoon ?
                        (<Link
                            href={{
                               pathname: '/moon',
                               query: { year: cal.year },
                            }}
                          >
                           <div>{runicDay.newMoon.symbol}</div>
                          </Link>)
                      : "."}</div>
                </div>
              )
              )}
          </div>
      </div>
  )
}

