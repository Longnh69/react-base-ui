import { Segmented, type SegmentedProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseSegmentedProps extends SegmentedProps, PropsWithStyleCss {}

export default forwardRef(function BaseSegmented(props: BaseSegmentedProps, ref: Ref<HTMLDivElement> | any) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Segmented
      ref={ref}
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
