import Image from 'next/image'
import Link from 'next/link'

const WebDeveloperPage = () => {
  return (
    <section>
      <h1>Web Developer</h1>

      <div style={{ maxWidth: '50%' }}>
        <Link href="/portfolio/webdeveloper/css/animation-1">
          <a>
            <Image
              layout="responsive"
              width="100%"
              height="100%"
              src="/img/p/webdev/css-animation-1.jpg"
              blurDataURL="/img/p/webdev/css-animation-1-blur.jpg"
              alt="CSS Animation 1"
              title="Interactive CSS/HTML5 Animation"
              objectFit="cover"
              placeholder="blur"
            />
          </a>
        </Link>
        <h2 style={{ textAlign: 'center', padding: '1rem' }}>
          Interactive CSS/HTML5 animation
        </h2>
      </div>
    </section>
  )
}

export default WebDeveloperPage
