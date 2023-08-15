import { useEffect, useState } from 'react'
import Image from 'next/image'

import useWindowDimensions from '../../../../../hooks/useWindowSize'
import Modal from '../../../../UI/Modal'

import classes from './LocationPhotos.module.scss'

const LocationPhotos = (props) => {
  const [modal, setModal] = useState({
    open: false,
    current: null,
    title: null,
    photos: null
  })
  const [width, widthSet] = useState(3000)

  useEffect(() => {
    widthSet(window.innerWidth)
    const html = document.querySelector('html')
    modal.open ? html.classList.add('modal') : html.classList.remove('modal')
  }, [modal])

  const openModal = (e) => {
    e.preventDefault()

    setModal({
      open: true,
      current: e.target.dataset.img,
      title: e.target.dataset.title,
      photos: props.photos
    })
    e.target.blur()
  }

  const closeModal = (e) => {
    e.preventDefault()
    setModal({ open: false })
  }

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      e.key === 'Escape' && setModal({ open: false })
    })
  })

  return (
    <section className={classes.photos}>
      {props.photos.map((photo) => (
        <div key={photo.img}>
          <a className={classes.photoItem} onClick={openModal} href={`/blogs/lesser-known-iceland/content/${photo.img}-1500.jpg`} target="_blank" rel="noreferrer">
            {width >= 601 && (
              <Image
                layout="fill"
                src={`/blogs/lesser-known-iceland/content/${photo.img}-1000.jpg`}
                blurDataURL={`/blogs/lesser-known-iceland/content/${photo.img}-blur.jpg`}
                placeholder="blur"
                title={props.title}
                alt={props.title}
                objectFit="cover"
                data-img={props.photos.map((e) => e.img).indexOf(photo.img)}
                data-title={props.title}
              />
            )}
            {width >= 0 && width < 601 && (
              <Image
                layout="fill"
                src={`/blogs/lesser-known-iceland/content/${photo.img}-500.jpg`}
                blurDataURL={`/blogs/lesser-known-iceland/content/${photo.img}-blur.jpg`}
                placeholder="blur"
                title={props.title}
                alt={props.title}
                objectFit="cover"
                data-img={props.photos.map((e) => e.img).indexOf(photo.img)}
                data-title={props.title}
              />
            )}
          </a>
        </div>
      ))}
      {modal.open && <Modal closeModal={closeModal} current={+modal.current} title={modal.title} photos={modal.photos} />}
    </section>
  )
}

export default LocationPhotos
