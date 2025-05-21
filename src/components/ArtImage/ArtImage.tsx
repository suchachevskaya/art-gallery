import { useState } from 'react'
import './ArtImage.scss'
import { createImgSource } from '@/utils/createImgSource';

type ArtImageProps = {
  imageId: string | null
  width: number
  height: number
  alt?: string
  lqip?: string
}

export function ArtImage({
  imageId,
  alt = '',
  width = 600,
  height = 600,
  lqip,
}: ArtImageProps) {

  const [loaded, setLoaded] = useState(false)
  const src = createImgSource(imageId, width);

  const handleImageLoad = (): void => {
    setLoaded(true)
  }

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
        onLoad={handleImageLoad}
        style={{ width, height }}
      />
    </div>
  )
}
