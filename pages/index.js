import Link from 'next/link';
import {DayDate, MonthYear} from '/components/date'
import localFont from 'next/font/local'

const babel = localFont({
  src: '../fonts/BabelStoneRunicByrhtferth.woff2'
})

export async function getStaticProps() {
  console.log("Invoking fetch")
  const res = await fetch('http://localhost:8080/calendar/day');
  const cal = await res.json()
  console.log("fetched:", cal)
  return {
    props: { cal },
  };
}

export default function Home({cal}) {
  console.log("cal=" , cal)
  return (
      <div class="main">
        <div class="row">
        <DayDate data={cal}/>
        <Link
            href={{
              pathname: '/month/[month]',
              query: { month: cal.month },
            }}
        >
            <MonthYear data={cal}/>
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
