import { Avatar, type AvatarProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseAvatarProps extends AvatarProps {}

export default forwardRef(function BaseAvatar(props: BaseAvatarProps, ref: Ref<HTMLSpanElement> | null) {
  const { className, ...restProps } = props

  return (
    <Avatar
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
