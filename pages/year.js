import Link from 'next/link';

export async function getServerSideProps(context) {

  var query = "";
  if( context.query.year )
    query="?year=" + context.query.year;

  const res = await fetch('http://localhost:8080/calendar/year' + query);
  const cal = await res.json()

  return {
    props: { cal },
  };
}

export default function Year({cal}) {
  return (
      <div class="main">
          <div class="title">{cal.year}</div>
          <div class="description">Sundays</div>
          <div class="row">
              {cal.sundays.map((rune, index) => (
                <div class="day-container"><div>{rune.symbol}</div><div>{rune.name}</div><div>{rune.meaning}</div></div>
              )
              )}
          </div>
          <div class="description">Moon Symbol</div>
          <div class="day-container"><div>{cal.moon.symbol}</div><div>{cal.moon.name}</div><div>{cal.moon.meaning}</div></div>
      </div>
  )
}

