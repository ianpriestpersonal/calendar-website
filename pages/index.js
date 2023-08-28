import Head from 'next/head';
import Link from 'next/link';
import NiceDate from'/components/date'

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
    <div class="container">
      <Head>
        <title>Seasonality</title>
      </Head>

      <div class="main">
        <Link
            href={{
              pathname: '/month/[month]',
              query: { month: cal.month },
            }}
          >
            <NiceDate data={cal}/>
        </Link>
        <p class="rune_large">{cal.runicDay.day.symbol}</p>
        <p class="description">{cal.runicDay.day.name} {cal.runicDay.day.meaning}</p>
        <p class="rune_small">{cal.sunday.symbol}</p>
        {cal.runicDay.newMoon != null && <p class="rune_small">{cal.runicDay.newMoon.symbol}</p>}
        <div>
            What about holidays and festivals?
        </div>

      </div>

      <div class="footer">
        <Link href="allabout">About</Link> |
        <Link href="runic">Runic Calendars</Link>
      </div>

    </div>
  )
}
