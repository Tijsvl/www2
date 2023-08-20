import Head from 'next/head'
import { useRouter } from 'next/router'
import Gallery from '../../components/pages/Gallery/Gallery'

export async function getStaticPaths() {
  // Fetch the list of galleries from the API
  const response = await fetch('https://tijsvl.net/static/galleries/')

  const data = await response.json()
  // Generate the paths you want to pre-render based on the posts

  const paths = data.paths.map((path) => ({
    params: { slug: path }
  }))

  // Return the list of paths to be pre-rendered
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const url = `https://tijsvl.net/static/galleries/?dir=${params.slug}`

  // Fetch the post data based on the Slug
  const response = await fetch(url)
  const gallery = await response.json()

  return { props: { gallery } }
}

function SingleGalleryPage({ gallery }) {
  const router = useRouter()

  // Render the post data
  return <Gallery gallery={router.query.slug} photos={gallery.photos} />
}

export default SingleGalleryPage
