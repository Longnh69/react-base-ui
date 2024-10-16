import { GetProps, Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseSkeletonNodeProps = SkeletonProps & GetProps<typeof Skeleton.Node> & PropsWithStyleCss & {}

export default function BaseSkeletonNode(props: BaseSkeletonNodeProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton.Node
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
