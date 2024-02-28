import { Progress, type ProgressProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseProgressProps extends ProgressProps {}

export default forwardRef(function BaseProgress(props: BaseProgressProps, ref: Ref<HTMLDivElement> | null) {
  const { className, ...restProps } = props

  return (
    <Progress
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
