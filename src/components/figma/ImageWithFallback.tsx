import image_98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9 from 'figma:asset/98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9.png';
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  image_98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
