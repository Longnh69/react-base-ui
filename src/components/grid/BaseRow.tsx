import { Row, RowProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseRowProps extends RowProps, PropsWithStyleCss {}

export default forwardRef(function BaseRow(props: BaseRowProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Row
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
