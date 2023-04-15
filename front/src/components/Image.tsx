import { memo } from "react"
import type { ImgHTMLAttributes } from 'react'

type Iprops = ImgHTMLAttributes<any>

const Image = memo(function Image({
  src,
  width,
  height,
  ...restProps
}: Iprops) {
  const webpSrc = replaceExtension(src, 'webp')
  const avifSrc = replaceExtension(src, 'avif')

  return (
    <picture>
      <source srcSet={`/api/${webpSrc}`} type="image/webp" {...{ width, height }} />
      <source srcSet={`/api/${avifSrc}`} type="image/avif" {...{ width, height }} />
      <img src={src} {...restProps} />
    </picture>
  )
})

function replaceExtension(src: string, ext: string) {
  return src.replace(/\.[^\.]+$/, `.${ext}`)
}

export { Image }
