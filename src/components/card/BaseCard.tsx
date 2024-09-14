import { Card, type CardProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseCardBasicFacet from './BaseCardBasicFacet'

export interface BaseCardProps extends CardProps {
  facet?: 'basic' | 'default'
}

export default forwardRef(function BaseCard(props: BaseCardProps, ref: Ref<HTMLDivElement> | null) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'basic': {
      return <BaseCardBasicFacet className={className} {...restProps} />
    }

    default: {
      return (
        <Card
          ref={ref}
          className={twMerge(
            ` 
              min-h-4
              border [&_.ant-card-actions>li]:flex 
              [&_.ant-card-actions>li]:items-center [&_.ant-card-actions>li]:justify-center 
            `,
            className,
          )}
          {...restProps}
        />
      )
    }
  }
})
