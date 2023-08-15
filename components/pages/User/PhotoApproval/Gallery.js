/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Head from 'next/head'
import { date } from '../../../../helpers/Helpers'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner'
import classes from './Gallery.module.scss'

const Gallery = (props) => {
  const emptyProps = !Object.keys(props).length
  const gallery = props.details
  const [processed, setProcessed] = useState(gallery.processed)

  if (emptyProps) return <LoadingSpinner />

  const readyHandler = async (e) => {
    props.onReady({
      id: props.details.id,
      processed: e.target.dataset.processed
    })
    setProcessed(e.target.dataset.processed === 'true' ? true : false)
  }

  const rejectHandler = async (e) => {
    let photo = e.target.firstChild !== null ? (photo = e.target.firstChild) : (photo = e.target)

    // UPDATE FIREBASE
    const key = photo.dataset.key
    const img = photo.dataset.img
    const status = photo.dataset.status === 'false' ? false : true

    document.getElementById(img).closest('li').dataset.saving = 'true'

    props.onReject({
      id: props.details.id,
      photo: key,
      approved: !status
    })

    // TOGGLE PHOTO CLASS AFTER FIREBASE UPDATE
    document.getElementById(img).closest('li').dataset.saving = 'false'
    document.getElementById(img).closest('li').dataset.status = !status
    document.getElementById(img).dataset.status = !status

    setProcessed(e.target.dataset.processed === 'true' ? true : false)
  }

  return (
    <React.Fragment>
      <div suppressHydrationWarning={true}>
        <Head>
          <title>
            {date(gallery.date, 'short-not-year')} - {gallery.artist} @ {gallery.city}, {gallery.country} | @tijsvl
          </title>
        </Head>
        <section className={classes.gallery}>
          <h1>{gallery.artist}</h1>
          <h2>{`${gallery.venue}, ${gallery.city}, ${gallery.country}`}</h2>
          <time dateTime={date(gallery.date, 'time')}>{date(gallery.date, 'long')}</time>
          <div className={classes.team}>
            <h3>In this team</h3>
            <ul>
              {gallery.team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
          <div className={classes.status}>
            {processed && (
              <button onClick={readyHandler} data-processed="false" className={classes.ready}>
                Ready! Click to revert
              </button>
            )}
            {!processed && (
              <button onClick={readyHandler} data-processed="true" className={classes.notready}>
                All done? Click here!
              </button>
            )}
          </div>

          <p className={classes.instructions}>Click a photo to toggle status</p>

          <ul className={classes.photos}>
            {gallery.photos.map((photo, idx) => (
              <React.Fragment key={photo.image}>
                <h5>{photo.image.replace('.jpg', '')}</h5>
                <li onClick={rejectHandler} data-status={photo.approved} data-saving="false">
                  <img
                    alt="Approve/Dissaprove"
                    id={photo.image}
                    data-status={photo.approved}
                    data-img={photo.image}
                    title={photo.image.replace('.jpg', '')}
                    data-key={idx}
                    src={'https://tijsvl.net/Qlibpk7E/approval/' + gallery.date + '-' + gallery.slug + '/' + photo.image}
                  />
                </li>
              </React.Fragment>
            ))}
          </ul>

          <div className={classes.status}>
            {processed && (
              <button onClick={readyHandler} data-processed="false" className={classes.ready}>
                Ready! Click to revert
              </button>
            )}
            {!processed && (
              <button onClick={readyHandler} data-processed="true" className={classes.notready}>
                All done? Click here!
              </button>
            )}
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Gallery
