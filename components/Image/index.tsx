import NextImage, { ImageProps } from 'next/image'
import { CSSProperties } from 'react'

import { ImageWrapper } from './styles'

type Props = {
  wrapperStyle?: CSSProperties
  nextImgProps: ImageProps
}

const ResponsiveNextImage = ({ wrapperStyle, nextImgProps, ...rest }: Props) => {
  return (
    <ImageWrapper className="next-image-wrapper" style={wrapperStyle} {...rest}>
      <NextImage {...nextImgProps} />
    </ImageWrapper>
  )
}

export default ResponsiveNextImage
