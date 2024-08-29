import { CloseOutlined } from '@ant-design/icons'
import { Tag, type TagProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTagProps extends TagProps {
  spaceY?: boolean
}

export default forwardRef(function BaseTag(props: BaseTagProps, ref: Ref<HTMLElement> | null) {
  const { spaceY, className, color, ...restProps } = props

  return (
    <Tag
      ref={ref}
      className={twMerge(
        `
          
        `,
        spaceY && 'my-0.5',
        className,
      )}
      color={color}
      closeIcon={<CloseOutlined style={{ color, opacity: 50 }} />}
      {...restProps}
    />
  )
})
