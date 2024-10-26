import { Carousel, CarouselProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseCarouselProps extends CarouselProps, PropsWithStyleCss {}

export default function BaseCarousel(props: BaseCarouselProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Carousel
      className={twMerge(
        `
       
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
