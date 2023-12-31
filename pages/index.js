import Link from 'next/link';
import {DayDate, Month} from '/components/date'
import localFont from 'next/font/local'
import MoonYear from '/components/utils'
import MoonPhase from '/components/MoonPhase'

const babel = localFont({
  src: '../fonts/BabelStoneRunicByrhtferth.woff2'
})

const moonFont = localFont({
  src: '../fonts/MoonPhases-1j94.ttf'
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

  const res = await fetch(process.env.API_URL + '/calendar/day' + query);
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
        <p class="description">{cal.oldMonth.oldName}, {cal.oldMonth.meaning}</p>
        <p class="rune_large" style={babel.style}>{cal.runicDay.day.symbol}</p>
        <p class="description">{cal.runicDay.day.name} {cal.runicDay.day.meaning}</p>
        <div class="row rune_small">
            <Link
                       href={{
                          pathname: '/year',
                          query: { year: cal.year },
                       }}
                   >
                      {cal.sunday.symbol}
            </Link>
            {cal.runicDay.newMoon != null && ( <Link
                     href={{
                        pathname: '/moon',
                        query: { year: cal.year },
                     }}
                   >
                    {cal.runicDay.newMoon.symbol}
             </Link>)}
            <div className={moonFont.className}><MoonPhase data={cal.runicDay.moonPhase.ordinal}/></div>
        </div>

      </div>

  )
}
