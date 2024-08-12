import { Tag, type TagProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTagProps extends TagProps {
  isMargin?: boolean
}

export default forwardRef(function BaseTag(props: BaseTagProps, ref: Ref<HTMLElement> | null) {
  const { isMargin, className, ...restProps } = props

  return (
    <Tag
      ref={ref}
      color='default'
      className={twMerge(
        `
          
        `,
        isMargin && 'my-0.5',
        className,
      )}
      {...restProps}
    />
  )
})
