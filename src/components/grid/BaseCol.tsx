import { Col, ColProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseColProps extends ColProps {}

export default forwardRef(function BaseCol(props: BaseColProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, ...restProps } = props

  return (
    <Col
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
})
