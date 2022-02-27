import Image from 'next/image'
import Link from 'next/link'

import WebDeveloper from '../../../components/pages/Portfolio/WebDeveloper'

const WebDeveloperPage = () => {
  return (
    <section>
      <h1>Web Developer</h1>

      <WebDeveloper>
        <div>
          <Link href="/portfolio/webdeveloper/css/animation-1">
            <a>
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                src="/img/p/webdev/animation-1.gif"
                blurDataURL="/img/p/webdev/css-animation-1-blur.jpg"
                alt="HTML5 CSS Animation 1"
                title="Interactive HTML5/CSS animation"
                objectFit="cover"
                placeholder="blur"
              />
            </a>
          </Link>
          <h2>Interactive HTML5/CSS animation</h2>
        </div>
        <div>
          <Link href="/portfolio/webdeveloper/css/infinite-scroll">
            <a>
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                src="/img/p/webdev/infinite-scroll.gif"
                blurDataURL="/img/p/webdev/css-animation-1-blur.jpg"
                alt="HTML5 CSS Infinite Scroll Banner"
                title="HTML5/CSS Only Infinite Scroll Banner"
                objectFit="cover"
                placeholder="blur"
              />
            </a>
          </Link>
          <h2>HTML5/CSS Infinite Scroll Banner</h2>
        </div>
      </WebDeveloper>
    </section>
  )
}

export default WebDeveloperPage
