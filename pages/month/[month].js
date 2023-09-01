import Link from 'next/link';
import {MonthYear} from '/components/date'

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
      <div class="main">
          <div class="title"><MonthYear data={cal}/></div>
          <div class="row">
              <div class="day-container"><div>Date</div><div>Day</div><div>Moon Dance</div></div>
              {cal.runicMonth.map((runicDay, index) => (
                <div class="day-container"><div>{index+1}</div><div>{runicDay.day.symbol}</div><div>{runicDay.newMoon ? runicDay.newMoon.symbol : "."}</div></div>
              )
              )}
          </div>
      </div>
  )
}

