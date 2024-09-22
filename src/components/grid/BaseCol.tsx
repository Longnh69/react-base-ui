import { Col, ColProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseColProps extends ColProps, PropsWithStyleCss {}

export default forwardRef(function BaseCol(props: BaseColProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Col
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
