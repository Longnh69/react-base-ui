import { type GetProps, Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseSkeletonImageProps = SkeletonProps & GetProps<typeof Skeleton.Image> & PropsWithStyleCss

export default function BaseSkeletonImage(props: BaseSkeletonImageProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton.Image
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
