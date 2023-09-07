import Link from 'next/link';
import {DayDate, Month} from '/components/date'
import localFont from 'next/font/local'

const babel = localFont({
  src: '../fonts/BabelStoneRunicByrhtferth.woff2'
})

export async function getServerSideProps(context) {

    var params = []

    if ( context.query.year )
        params.push("year="+context.query.year);
    if ( context.query.month )
        params.push("month="+context.query.month);
    if ( context.query.day )
        params.push("day="+context.query.day);

    var query = "";
    if ( params.length > 0 ) {
        query = "?" + params.join("&");
    }

  const res = await fetch('http://localhost:8080/calendar/day' + query);
  const cal = await res.json()

  return {
    props: { cal },
  };
}

export default function Home({cal}) {

  return (
      <div class="main">
        <div class="row">
        <DayDate data={cal}/>
        <Link
            href={{
              pathname: '/month',
              query: { month: cal.month },
            }}
        >
            <Month data={cal}/>
        </Link>
        <Link
            href={{
              pathname: '/year',
              query: { year: cal.year },
            }}
        >
            {cal.year}
        </Link>
        </div>
        <p class="rune_large" style={babel.style}>{cal.runicDay.day.symbol}</p>
        <p class="description">{cal.runicDay.day.name} {cal.runicDay.day.meaning}</p>
        <p class="rune_small">{cal.sunday.symbol}</p>
        {cal.runicDay.newMoon != null && <p class="rune_small">{cal.runicDay.newMoon.symbol}</p>}
        <div>
            What about holidays and festivals?
        </div>

      </div>

  )
}
