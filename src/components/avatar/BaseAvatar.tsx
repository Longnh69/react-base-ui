import { Avatar, type AvatarProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import { convertFullNameToImageName } from '../../utils/convert.util'
import BaseTypography from '../typography/BaseTypography'

export interface BaseAvatarProps extends AvatarProps, PropsWithStyleCss {
  name?: string
  fallbackShowName?: boolean
  fallbackClassName?: string
}

export default forwardRef(function BaseAvatar(props: BaseAvatarProps, ref: Ref<HTMLSpanElement> | null) {
  const { className, styleCss, name, fallbackShowName, fallbackClassName, src, children, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Avatar
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      src={src}
      {...restProps}
    >
      {children ??
        (fallbackShowName && name && !src && (
          <BaseTypography
            className={twMerge('flex items-center justify-center text-base font-medium text-white', fallbackClassName)}
          >
            {convertFullNameToImageName(name ?? '')}
          </BaseTypography>
        ))}
    </Avatar>
  )
})
