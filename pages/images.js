
import Image from 'next/image'
import profilePic from '../public/assets/images/sydney-harbour.png'
import { IMAGES_DATA_LIST } from '../pages/api/images'

function Images({ images }) {
  return (
    <>
      <h1>Images</h1>
      <p>Welcome to my images!</p>

      {
        images.map(image => {
          return <Image
            key={image.id}
            src={image.url}
            alt="Picture of the author"
            width={500}
            height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          />;
        })
      }



    </>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the image `id`.
  // If the route is like /images/1, then params.id is 1
  // const res = await fetch(`https://.../images/${params.id}`)
  // const images = await res.json()

  // Pass image data to the page via props
  const images = IMAGES_DATA_LIST
  return { props: { images } }
}


export default Images