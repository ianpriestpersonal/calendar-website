import Link from 'next/link';
import MoonYear from '/components/utils'

export async function getServerSideProps(context) {

    var params = []

    if ( context.query.year )
        params.push("year="+context.query.year);

    var query = "";
    if ( params.length > 0 ) {
        query = "?" + params.join("&");
    }

  const res = await fetch('https://runic-calendar.onrender.com/calendar/moon' + query);
  const cal = await res.json()
  console.log("moon cal=", cal)

  return {
    props: { cal },
  };
}

export default function MooonPage({cal}) {
  return (
      <div class="main">
          <div class="title">Moon Rhyme</div>
          <div class="description row">
            Magic numbers after year
            <Link
                href={{
                  pathname: '/year',
                  query: { year: cal.year },
                }}
            >
                {cal.year}
            </Link>
          </div>
          <div>
              {cal.futhark.map((rune, index) => (
                <div class="rune_row">
                <div>{rune.symbol}</div>
                <div>{rune.magicNumber}</div>
                <div><MoonYear data={cal} rune={rune}/></div>
                <div>{rune.name}</div>
                <div>{rune.meaning}</div>
                </div>
              )
              )}
          </div>
      </div>
  )
}

