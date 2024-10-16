import { GetProps, Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseSkeletonButtonProps = SkeletonProps & GetProps<typeof Skeleton.Button> & PropsWithStyleCss & {}

export default function BaseSkeletonButton(props: BaseSkeletonButtonProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton.Button
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
