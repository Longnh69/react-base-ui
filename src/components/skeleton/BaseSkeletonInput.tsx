import { GetProps, Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseSkeletonInputProps = SkeletonProps & GetProps<typeof Skeleton.Image> & PropsWithStyleCss & {}

export default function BaseSkeletonInput(props: BaseSkeletonInputProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton.Input
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
