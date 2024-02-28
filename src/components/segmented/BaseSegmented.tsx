import { Segmented, type SegmentedProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseSegmentedProps extends SegmentedProps {}

export default forwardRef(function BaseSegmented(props: BaseSegmentedProps, ref: Ref<HTMLDivElement> | any) {
  const { className, ...restProps } = props

  return (
    <Segmented
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
