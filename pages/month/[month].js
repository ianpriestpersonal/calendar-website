import Head from 'next/head';
import Link from 'next/link';

export async function getStaticPaths() {

  const paths = ["1","2","3","4","5","6","7","8","9","10","11","12"].map((monthOfYear) => ({
    params: { month: monthOfYear },
  }))

  return { paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log("Invoking fetch. params=", params)
  const res = await fetch('http://localhost:8080/calendar/month?month=' + params.month);
  const cal = await res.json()
  console.log("fetched:", cal)
  return {
    props: { cal },
  };
}

export default function Month({cal}) {
  console.log("cal=", cal)
  return (
    <div class="container">
      <Head>
        <title>Seasonality</title>
      </Head>

      <div class="main">
      Welcome to month {cal.month}
      </div>

      {cal.runicMonth.map((runicDay, index) => (
        <p>{index+1} : {runicDay.day.symbol} : {runicDay.newMoon && runicDay.newMoon.symbol}</p>
      )
      )}
      <div class="footer">
        <Link href="allabout">About</Link>
        <Link href="runic">Runic Calendars</Link>
        <a href="3">3</a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" class="logo" />
        </a>
      </div>

    </div>
  )
}
