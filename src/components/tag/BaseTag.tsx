import { Tag, type TagProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTagProps extends TagProps {
  spaceY?: boolean
}

export default forwardRef(function BaseTag(props: BaseTagProps, ref: Ref<HTMLElement> | null) {
  const { spaceY, className, ...restProps } = props

  return (
    <Tag
      ref={ref}
      className={twMerge(
        `
          
        `,
        spaceY && 'my-0.5',
        className,
      )}
      {...restProps}
    />
  )
})
