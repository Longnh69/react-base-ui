import { Skeleton, type SkeletonProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseSkeletonProps extends SkeletonProps, PropsWithStyleCss {}

export default function BaseSkeleton(props: BaseSkeletonProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Skeleton
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
