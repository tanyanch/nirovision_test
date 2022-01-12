

import Image from 'next/image'
import { IMAGES_DATA_LIST } from '../api/images'

function PrettyImage({ image }) {
    // Render image...
    return <div>
        <h1>Image</h1>
        <p>Welcome to my images!</p>
        <Image
            src={image.url}
            alt="Picture of the author"
            width={500}
            height={500}
        />

        <p>Image: {image.name}</p>

    </div>
}

export async function getStaticPaths() {
    // Call an external API endpoint to get images
    // const res = await fetch('https://.../images')
    // const images = await res.json()
    const images = IMAGES_DATA_LIST

    // Get the paths we want to pre-render based on images
    const paths = images.map((image) => ({
        params: { id: image.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the image `id`.
    // If the route is like /images/1, then params.id is 1
    // const res = await fetch(`https://.../images/${params.id}`)
    // const image = await res.json()

    // Pass image data to the page via props
    const image = IMAGES_DATA_LIST.find(i => i.id == params.id)
    return { props: { image } }
}

export default PrettyImage