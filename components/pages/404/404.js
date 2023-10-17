import Head from 'next/head'

import classes from './404.module.scss'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>@tijsvl | Page Not Found</title>
        <meta property='og:title' content='@tijsvl | Page Not Found' />
        <meta name='twitter:title' content='@tijsvl | Page Not Found' />
        <meta property='og:description' content='404 Page Not Found' />
        <meta name='twitter:description' content='404 Page Not Found' />
        <meta name='description' content='404 Page Not Found' />
        <link rel='canonical' href='https://www.tijsvl.com/404' />
        <meta property='og:url' content='https://www.tijsvl.com/404' />
        <meta name='twitter:url' content='https://www.tijsvl.com/404' />
      </Head>
      <section className={classes.errorPage}>
        <div className={classes.error404}>
          <h1>404</h1>
          <p>
            Error:
            <br />
            This page could not be found
          </p>
        </div>
      </section>
    </>
  )
}

export default NotFound
