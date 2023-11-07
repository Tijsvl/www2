import Link from 'next/link'
import Head from 'next/head'

import Form from '../Contact/Form'
import classes from './Copyright.module.scss'

const Copyright = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Copyright</title>
        <meta property="og:title" key="ogTitle" content="Copyright" />
        <meta name="twitter:title" key="twitterTitle" content="Copyright" />
        <meta
          property="og:description"
          key="ogDescription"
          content="I hold all copyrights to all photos on this website unless mentioned otherwise. Photos may only be used with written consent."
        />
        <meta
          name="twitter:description"
          key="twitterDescription"
          content="I hold all copyrights to all photos on this website unless mentioned otherwise. Photos may only be used with written consent."
        />
        <meta
          name="description"
          key="description"
          content="I hold all copyrights to all photos on this website unless mentioned otherwise. Photos may only be used with written consent."
        />
        <meta property="og:image" key="ogImage" content="https://www.tijsvl.com/img/og_default.jpg" />
        <meta name="twitter:image" key="twitterImage" content="https://www.tijsvl.com/img/og_default.jpg" />
        <link rel="canonical" key="canonical" href="https://www.tijsvl.com/copyright" />
        <meta property="og:url" key="ogUrl" content="https://www.tijsvl.com/copyright" />
        <meta name="twitter:url" key="twitterUrl" content="https://www.tijsvl.com/copyright" />
      </Head>
      <section>
        <h1>Copyright</h1>

        <div className={classes.copyright}>
          <div className={classes.note}>
            <h2>As of June 10th, 2021</h2>
            <a href="copyright_until_june_10_2021.txt" target="_blank" rel="noreferrer">
              View previous version
            </a>
            <p>I hold all copyrights to all photos on this website unless mentioned otherwise. Photos may only be used with written consent. Exceptions may be listed below.</p>
          </div>

          <h3>Want to PUBLISH my photo?</h3>
          <p>
            You must always{' '}
            <Link href="/contact">
              <a>contact me</a>
            </Link>{' '}
            and:
            <br />
            - Include details such as the name of the magazine, website, etc.
            <br />
            - You must clearly and correctly credit me.
            <br />- You must send me physical copy to my home address.
          </p>

          <h3>Want to COMMERCIALLY use my photo?</h3>
          <p>
            - You must always{' '}
            <Link href="/contact">
              <a>contact me</a>
            </Link>{' '}
            and:
            <br />
            - Include details such as the name of the campaign, estimated reach, what you&apos;re promoting, etc.
            <br />
            - You must provide me with the final result.
            <br />- This includes social media post promoting your products.
          </p>

          <h3>Are you the ARTIST/PERFORMER/ATHLETE on the photo?</h3>
          <p>
            - You may use my photo on your social media outlets, but you MUST visibly credit me both in text and tag using{' '}
            <a href="//instagr.am/tijsvl" target="_blank" rel="noreferrer">
              @tijsvl
            </a>{' '}
            (for music photos) on Instagram, Facebook and/or Twitter, or{' '}
            <a href="//instagr.am/tvl_sports" target="_blank" rel="noreferrer">
              @tvl_sports
            </a>{' '}
            (for sports photos) on Instagram, or{' '}
            <a href="//instagr.am/tvl_sports" target="_blank" rel="noreferrer">
              @tvl_sports
            </a>{' '}
            (for sports photos) on Instagram, or{' '}
            <a href="//instagr.am/lookwhatiso" target="_blank" rel="noreferrer">
              @lookwhatiso
            </a>{' '}
            (for world photos) on Instagram.
            <br />
            - You may share my work using the &apos;share&apos; functions provided by Instagram, Facebook and/or Twitter.
            <br />
            - You may NOT use any photo to promote products and/or services without written consent.
            <br />
            - You may NOT use any photo for print without written consent.
            <br />- You may NOT re-edit my photos in any way.
          </p>

          <h3>Are you the record LABEL/PROMOTOR for the artist on the photo?</h3>
          <p>
            - You may use my photo on your social media outlets, but you MUST visibly credit me both in text and tag using{' '}
            <a href="//instagr.am/tijsvl" target="_blank" rel="noreferrer">
              @tijsvl
            </a>{' '}
            (for music photos) on Instagram, Facebook and/or Twitter, or{' '}
            <a href="//instagr.am/tvl_sports" target="_blank" rel="noreferrer">
              @tvl_sports
            </a>{' '}
            (for sports photos) on Instagram, or{' '}
            <a href="//instagr.am/lookwhatiso" target="_blank" rel="noreferrer">
              @lookwhatiso
            </a>{' '}
            (for world photos) on Instagram.
            <br />
            - You may share my work using the &apos;share&apos; functions provided by Instagram, Facebook and/or Twitter.
            <br />
            - You may NOT use any photo to promote products and/or services without written consent.
            <br />
            - You may NOT use any photo for print without written consent.
            <br />- You may NOT re-edit my photos in any way.
          </p>

          <h3>Are you the VENUE/FESTIVAL/HOST/ORGANIZER on the photo?</h3>
          <p>
            - You may use my photo on your social media outlets, but you MUST visibly credit me both in text and tag using{' '}
            <a href="//instagr.am/tijsvl" target="_blank" rel="noreferrer">
              @tijsvl
            </a>{' '}
            (for music photos) on Instagram, Facebook and/or Twitter, or{' '}
            <a href="//instagr.am/tvl_sports" target="_blank" rel="noreferrer">
              @tvl_sports
            </a>{' '}
            (for sports photos) on Instagram, or{' '}
            <a href="//instagr.am/lookwhatiso" target="_blank" rel="noreferrer">
              @lookwhatiso
            </a>{' '}
            (for world photos) on Instagram.
            <br />
            - You are limited to using a maximum of 2 photos.
            <br />
            - You may share my work using the &apos;share&apos; functions provided by Instagram, Facebook and/or Twitter.
            <br />
            - You may NOT use any photo to promote products and/or services without written consent.
            <br />
            - You may NOT use any photo for print without written consent.
            <br />- You may NOT re-edit my photos in any way.
          </p>

          <h3>Are you A FAN/SUPPORTER on the photo?</h3>
          <p>
            - Go ahead and use it on your social media, but tag me using{' '}
            <a href="//instagr.am/tijsvl" target="_blank" rel="noreferrer">
              @tijsvl
            </a>{' '}
            (for music photos) on Instagram, Facebook and/or Twitter, or{' '}
            <a href="//instagr.am/tvl_sports" target="_blank" rel="noreferrer">
              @tvl_sports
            </a>{' '}
            (for sports photos) on Instagram, or{' '}
            <a href="//instagr.am/lookwhatiso" target="_blank" rel="noreferrer">
              @lookwhatiso
            </a>{' '}
            (for world photos) on Instagram.
            <br />
            - You may NOT use any photo to promote products and/or services without written consent.
            <br />
            - You may NOT use any photo for print without written consent.
            <br />- You may NOT re-edit my photos in any way.
          </p>

          <h3>Exceptions</h3>
          <p>
            Photos taken by me but offered on other platforms such as Unsplash (
            <a href="https://unsplash.com/@tijsvl" target="_blank" rel="noreferrer">
              my profile
            </a>
            ), 500px (
            <a href="https://500px.com/p/lookwhatiso" target="_blank" rel="noreferrer">
              my profile
            </a>
            ), Getty Images and other platforms are exempt from all mentioned above. Terms & Conditions of the respective platforms apply instead.
          </p>

          <h3>Are you not sure if you can use my photo?</h3>
          <p>
            <Link href="/contact">
              <a>Contact me</a>
            </Link>
            .
          </p>
        </div>
      </section>

      <Form />
    </>
  )
}

export default Copyright
