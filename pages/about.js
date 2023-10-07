import Link from 'next/link';
import {Month} from '/components/date'

export default function AboutPage() {
  return (
      <div class="main">
          <div class="about_column">
              <div class="texttitle">About</div>
              <div class="textdescription">What is this website?</div>

              <div class="text">The motivation behind this website is the belief that connectedness is a healthy and sustainable way to view the world. This site
              attempts to support and facilitate that by making seasonal information available, in ways that are relevant to our urban society.</div>
              <div class="text">The initial inspiration was the work of Dr Rune Hjarnø Rasmussen on his YouTube channel <a href="https://www.youtube.com/@NordicAnimism" target="_blank" class="external">Nordic Animism</a>.
              Indeed the home page of this site is an online version of a Runic Calendar based on Rune's book The Nordic Animist Year, which you can buy at
              the <a class="external" href="https://shop.nordicanimism.com/shop/" target="_blank">Nordic Animism shop</a>.
              I strongly recommend it, as it goes into <i>much</i> more detail than is given here. You can also get a paper runic calendar from the Nordic Animist shop. It's a thing of beauty
              and will look lovely on your wall.
              <br/>You can follow Rune on his Nordic Animist <a href="https://www.youtube.com/@NordicAnimism" target="_blank" class="external">YouTube channel</a>. I especially
              recommend the series of videos on Ale!</div>

              <div class="text">The home page of this site, with it season-named months and its fundamental dependence on the moon's movements is implicitly linked to the
              cycle of the natural year. There will in future be links to seasonal celebrations and seasonal food. The hope is that it will help make people aware of, and bring them together
              to celebrate, the yearly cycle of seasons. It seems that this connection to the annual turning of the seasons is being lost in urban society, and that it's loss is bad both
              for us and for the world, so lets try to reverse it.</div>

              <div class="text">Some links are not marked. That's deliberate for two reasons. The first is asthetic, the second is to provide a slight
              air of mystery. Runes shouldn't be too easy!</div>

              <div class="texttitle">How To Read The Calendar</div>
              <div class="textdescription">The Runic Alaphabet</div>
              <div class="text">The futhark (runic alphabet) used is the Old English or Anglo-Saxon futhork. There are several other rune alphabets (futharks) and one day this
              will be updated to make the futhark a query parameter, so that the user can decide which they would like to use.</div>

              <div class="textdescription">Day Symbols And Sundays</div>
              <div class="text">The seven days of the week are represented by the first seven characters of the Futhork. Unlike a traditional calendar the symbols represent
              specific dates in a month. That does mean that a runic day symbol may be a Monday one year and a Tuesday the next. That's where the Sunday symbol comes in.
              It gives the symbol that falls on a Sunday for a specific year, thus allowing the runic symbols and Gregorian days of the week to be aligned.</div>
              <div class="text">Leaps years have two Sunday symbols. There is no leap-day modelled in this calendar, so the 29th Feb has no runic symbol and the moon symbol changes
              after the leap-day has been inserted.</div>
              <div class="text">Runes have names and meanings in addition to the sound that they represent. The day page gives the name and meaning of the rune being shown</div>

              <div class="textdescription">The Moon Rhyme</div>
              <div class="text">The lunar cycle tends to repeat over a period of 19 years (Metonic Cycle) so the new moons tend to fall on the same date every 19 years.</div>
              <div class="text">The years of the new moons are represented by a rune known as a magic number. Through a month the individual dates can be marked with a magic-number rune
              that indicates the next time in the Metonic cycle that a new moon will fall on that date. The pattern of magic numbers is called the Moon Rhyme.</div>
              <div class="text">In traditional runic calendars the moon rhyme is fixed, (and over time the calendar will drift out of alignment) but here it's calculated dynamically
              and shows the new moons for the next 19 years from the current year.
              The magic number for a specific year is calculated using 2014 as a base. (It's just a arbitrary choice, used it because Rune did so in his book.) The pattern of
              magic number runes across a month is the moon rhyme for that month.</div>

              <div class="textdescription">The Old Month Names</div>
              <div class="text">Modern months have latin names, but before that they were often named seasonally. The old month names are given on this calendar,
              along with a translation of the old name. These names varied from region to region, and this calender uses the British names mostly. However, since the point
              is season-connectedness, in some cases a seasonal name from a different region is also given.</div>

              <div class="texttitle">The Pages</div>

              <div class="textdescription"><Link
                                              href={{
                                                 pathname: '/'
                                              }}
                                          class="internal">
                                             The Day Page
                                          </Link></div>
              <div class="text">The top two rows show the current modern date then the old month name and its meaning. The main image is the rune for the day with its name and meaning.
              Below that is the Sunday symbol for the day, and optionally the magic number for the day. The magic number won't be shown if there's no new moon in the next 19 years.</div>

              <div class="textdescription"><Link
                                              href={{
                                                 pathname: '/month'
                                              }}
                                          class="internal">
                                             The Month Page
                                          </Link></div>
              <div class="text">The top two rows show the current modern name then the old month name and meaning. The table describes the month.<br/>
              The top row of the table gives the day dates for the month, the second row is the rune symbols for those days. The third row of the table shows the
              moon rhyme magic numbers for the month, calculated starting from the year shown in the first line.</div>

              <div class="textdescription"><Link
                                              href={{
                                                 pathname: '/year'
                                              }}
                                          class="internal">
                                             The Year Page
                                          </Link></div>
              <div class="text">Shows the Sunday runes (there will be two for a leap year) and the magic number for the year</div>

              <div class="textdescription"><Link
                                              href={{
                                                 pathname: '/moon'
                                              }}
                                          class="internal">
                                             The Moon Page
                                          </Link></div>
              <div class="text">Shows the magic numbers for the next 19 years starting from the current year, along with the name and meaning of the runic symbol for the magic number.</div>

              <div class="textdescription">Query Variables</div>
              <div class="text">All the pages default to the current date, but all can accept query parameters of day, month or year should you wish to explore other dates.</div>
              <div class="text">All of the parameters are optional, and will default to the current date if not supplied. For example, if today is the 24th Sept 2023 and you enter
              <div class="code">/?year=2030</div>
               as the query parameters, you'll see the day page for 24th September 2030.</div>
              <div class="text">Valid month values are 1-12, years before 2014 aren't accepted and neither are day values higher than the length of the month.</div>


           </div>

      </div>
  )
}