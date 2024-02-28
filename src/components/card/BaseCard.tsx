import { Card, type CardProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseCardProps extends CardProps {}

export default forwardRef(function BaseCard(props: BaseCardProps, ref: Ref<HTMLDivElement> | null) {
  const { className, ...restProps } = props

  return (
    <Card
      ref={ref}
      className={twMerge(
        `
          min-h-4 border 
          [&_.ant-card-actions>li]:flex [&_.ant-card-actions>li]:items-center [&_.ant-card-actions>li]:justify-center
        `,
        className,
      )}
      {...restProps}
    />
  )
})
