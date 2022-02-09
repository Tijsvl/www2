import Image from 'next/image';

import classes from './Biography.module.scss';

const Biography = () => {
  return (
    <section className={classes.biography}>
      <figure>
        <picture>
          <Image
            layout='fill'
            src='/img/about__tijsvl-2000.jpg'
            blurDataURL='/img/about__tijsvl-blur.jpg'
            alt='tijsvl | Tijs van Leur'
            title='tijsvl | Tijs van Leur'
            objectFit='cover'
            placeholder='blur'
          />
        </picture>
        <figcaption>
          <strong>Tijs van Leur</strong>
          <br />
          Iceland 2021, photo by
          <a href='https://instagram.com/vyarazlatilova' target='_blank' rel='noreferrer'>
            {' '}
            @vyarazlatilova
          </a>
        </figcaption>
      </figure>
      <div>
        <h2>Tijs van Leur</h2>
        <p>
          Born September 22nd, 1986 in the small but beautiful city of Nijmegen, The Netherlands. Photography
          is a mostly self-taught skill I aqcuired by shooting shows of local and befriended bands.
        </p>
        <p>
          This eventually led to shooting many other artists in the music scene and touring all over the world
          for bands such as The Offspring, Sum 41, Rise Against, Flogging Molly, Dropkick Murphys, The Used
          and many more.
        </p>
        <p>
          Aside shooting in the music scene I'm also a photographer and general content creator for renowned
          sports events such as NN Zevenheuvelenloop, Alfa Laval Stevensloop and Marikenloop.
        </p>
        <p>
          Photography is a big part of my skillset, but not the only one. Other skills I've aqcuired are:
          videography, video editing, graphic design, web design and web coding.
        </p>
        <p>
          Feel free to <a href='#contact'>drop me a message</a> down below!
        </p>
      </div>
    </section>
  );
};

export default Biography;
