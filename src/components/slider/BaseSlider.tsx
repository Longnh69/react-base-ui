import { Slider, type SliderSingleProps } from 'antd'
import { type SliderRangeProps } from 'antd/es/slider'
import { forwardRef, type LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

type SliderProps = SliderSingleProps | SliderRangeProps

export type BaseSliderProps = SliderProps

export default forwardRef(function BaseSlider(props: BaseSliderProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, ...restProps } = props

  return (
    <Slider
      ref={ref}
      className={twMerge(
        `
    
        `,
        className,
      )}
      {...restProps}
    />
  )
})
