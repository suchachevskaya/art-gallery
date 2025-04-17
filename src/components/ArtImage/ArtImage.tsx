import { useState } from 'react'
import './ArtImage.scss'

type ArtImageProps = {
  imageId: string
  alt?: string
  width?: number
  height?: number
  lqip?: string
}

export default function ArtImage({
  imageId,
  alt = '',
  width = 600,
  height = 600,
  lqip,
}: ArtImageProps) {
  const [loaded, setLoaded] = useState(false)
  const src = `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`

  return (
    <div
      className={`art-image ${loaded ? 'loaded' : ''}`}
      style={{
        width,
        height,
        backgroundImage: lqip ? `url(${lqip})` : undefined,
      }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ width, height }}
      />
    </div>
  )
}
