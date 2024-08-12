import { Row, RowProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseRowProps extends RowProps {}

export default forwardRef(function BaseRow(props: BaseRowProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, ...restProps } = props

  return (
    <Row
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
