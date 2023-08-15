import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Modal from 'react-modal'

import ViewVideo from './ViewVideo'
import classes from './VideoItem.module.scss'
import { useEffect, useState } from 'react'

Modal.setAppElement('#__next')
const modalStyle = {
  content: {
    top: '20%',
    bottom: '20%',
    left: '50%',
    width: '95%',
    maxWidth: '90rem',
    padding: '0',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--light)',
    border: '1px solid var(--light)',
    borderRadius: '0'
  }
}

const VideoItem = (props) => {
  const router = useRouter()
  const [width, widthSet] = useState(3000)
  const [height, heightSet] = useState(3000)

  useEffect(() => {
    widthSet(window.innerWidth)
    heightSet(window.Height)
  }, [])

  let openModal = true
  if (width < 800 || height < 600) openModal = false

  const title = props.artist + ' - ' + props.title
  const image = `/img/videography__${props.slug}.jpg`
  const imageBlur = `/img/videography__${props.slug}-blur.jpg`

  return (
    <>
      <Link href={openModal ? `/portfolio/videography/?id=${props.slug}` : `/portfolio/videography/${props.slug}`} as={`/portfolio/videography/${props.slug}`}>
        <a className={classes.item}>
          <picture>
            <Image layout="fill" src={image} blurDataURL={imageBlur} alt={title} title={title} objectFit="cover" placeholder="blur" />
          </picture>
          <h2>{props.artist}</h2>
          <p>{props.title}</p>
        </a>
      </Link>
      <Modal isOpen={router.query.id === props.slug} onRequestClose={() => router.push('/portfolio/videography')} style={modalStyle} portalClassName={classes.modal}>
        <ViewVideo artist={props.artist} title={props.title} slug={props.slug} source={props.source} credits={props.credits} image={image} dimensions={props.dimensions} />
      </Modal>
    </>
  )
}

export default VideoItem
