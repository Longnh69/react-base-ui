import { Progress, type ProgressProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseProgressProps extends ProgressProps, PropsWithStyleCss {}

export default forwardRef(function BaseProgress(props: BaseProgressProps, ref: Ref<HTMLDivElement> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Progress
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
