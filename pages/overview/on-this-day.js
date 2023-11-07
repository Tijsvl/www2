/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import OnThisDay from '../../components/pages/Overview/OnThisDay'
import OnThisDayShows from '../../components/pages/Overview/OnThisDayShows'
import OnThisDayBirthdays from '../../components/pages/Overview/OnThisDayBirthdays'

import { date } from '../../helpers/Helpers'
import LoadingSpinner from '../../components/UI/LoadingSpinner'

const OnThisDayPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [shows, setShows] = useState([])
  const [birthdays, setBirthdays] = useState([])
  const [error, setError] = useState({ error: false, message: null })

  const today = new Date().toISOString().substr(0, 10).replace(/T/, '').replace(/-/g, '')

  let day = today.slice(6, 8)
  let month = today.slice(4, 6)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`https://tijsvl.net/next-api/overview/on-this-day/?day=${day}&month=${month}`)
      const data = await res.json()

      setShows(data.shows)
      setBirthdays(data.birthdays)
      setIsLoading(false)
    } catch (error) {
      setError({ error: true, message: 'Error. Failed to fetch data.' })
      console.error('Error. Failed to fetch data.')
      console.warn(error)
      setIsLoading(false)
    }
  }

  useEffect(() => fetchData(), [])

  return (
    <>
      <Head>
        <title>@tijsvl | On This Day</title>
        <meta property="og:title" key="ogTitle" content="@tijsvl | On This Day" />
        <meta name="twitter:title" key="twitterTitle" content="@tijsvl | On This Day" />
        <meta property="og:description" key="ogDescription" content="An overview of concerts and events on this day in the past" />
        <meta name="twitter:description" key="twitterDescription" content="An overview of concerts and events on this day in the past" />
        <meta name="description" key="description" content="An overview of concerts and events on this day in the past" />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <meta property="og:image:alt" content="https://www.tijsvl.com/img/prints__item__deryck-whibley-1000.jpg" key="ogImageAlt" />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/img/prints__buy__noodles-middlefinger-1000.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/overview/on-this-day" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/overview/on-this-day" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/overview/on-this-day" />
      </Head>
      <section>
        <h1>On This Day</h1>

        {isLoading && <LoadingSpinner />}
        {!isLoading && error.error && (
          <OnThisDay>
            <div className="error-message">{error.message}</div>
          </OnThisDay>
        )}
        {!isLoading && !error.error && (
          <OnThisDay>
            <time dateTime={date(today, 'time')}>An overview of all photo galleries and birthdays on {date(today, 'not-year')}</time>
            <OnThisDayShows shows={shows} />
            <OnThisDayBirthdays birthdays={birthdays} />
          </OnThisDay>
        )}
      </section>
    </>
  )
}

export default OnThisDayPage
