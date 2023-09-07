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

  const res = await fetch('http://localhost:8080/calendar/month' + query);
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
          <div class="row">
              <div class="day-container"><div>Date</div><div>Day</div><div>Moon Rhyme</div></div>
              {cal.runicMonth.map((runicDay, index) => (
                <div class="day-container"><div>{index+1}</div><div>{runicDay.day.symbol}</div><div>{runicDay.newMoon ? runicDay.newMoon.symbol : "."}</div></div>
              )
              )}
          </div>
      </div>
  )
}

