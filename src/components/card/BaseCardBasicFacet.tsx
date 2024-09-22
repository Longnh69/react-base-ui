import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseCard, { type BaseCardProps } from './BaseCard'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseCardBasicFacetProps extends Omit<BaseCardProps, 'facet'> {}

export default forwardRef(function BaseCardBasicFacet(props: BaseCardBasicFacetProps, ref: Ref<HTMLDivElement> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <BaseCard
      ref={ref}
      className={twMerge(
        ` 
          p-4
          [&_.ant-card-body]:p-0
          [&_.ant-card-head]:min-h-8
          [&_.ant-card-head]:justify-start
          [&_.ant-card-head]:border-none
          [&_.ant-card-head]:p-0
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
