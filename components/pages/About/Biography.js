import Image from 'next/image'
import Link from 'next/link'

import classes from './Biography.module.scss'

const Biography = () => {
  return (
    <section className={classes.biography}>
      <figure>
        <picture>
          <Image
            layout="fill"
            src="/img/about__tijsvl_2-2000.jpg"
            blurDataURL="/img/about__tijsvl_2-blur.jpg"
            alt="tijsvl | Tijs van Leur"
            title="tijsvl | Tijs van Leur"
            objectFit="cover"
            placeholder="blur"
          />
        </picture>
        <figcaption>
          <strong>Tijs van Leur</strong>
          <br />
          London 2023, photo by Villy
        </figcaption>
      </figure>
      <div>
        <h2>Tijs van Leur</h2>
        <p>
          Born September 22nd, 1986 in the small but beautiful city of Nijmegen, The Netherlands. Photography is a mostly self-taught skill I aqcuired by shooting shows of local
          and befriended bands.
        </p>
        <p>
          This eventually led to shooting many other artists in the music scene and touring all over the world for bands such as The Offspring, Sum 41, Rise Against, Flogging
          Molly, Dropkick Murphys, The Used and many more.
        </p>
        <p>
          Aside shooting in the music scene I&lsquo;m also a photographer and general content creator for renowned sports events such as NN Zevenheuvelenloop, Alfa Laval
          Stevensloop and Marikenloop.
        </p>
        <p>
          Photography is a big part of my skillset, but not the only one. Other skills I&lsquo;ve aqcuired are: videography, video editing, graphic design, web design and web
          coding.
        </p>
        <p>
          Feel free to{' '}
          <Link href="/contact">
            <a>drop me a message</a>
          </Link>{' '}
          down below!
        </p>
      </div>
    </section>
  )
}

export default Biography
