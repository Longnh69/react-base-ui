import { type GetProps, Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseSkeletonAvatarProps = SkeletonProps & GetProps<typeof Skeleton.Avatar> & PropsWithStyleCss

export default function BaseSkeletonAvatar(props: BaseSkeletonAvatarProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton.Avatar
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
