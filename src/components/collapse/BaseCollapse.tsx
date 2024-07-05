import { Collapse, type CollapseProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseCollapseProps extends CollapseProps {}

export default forwardRef(function BaseCollapse(props: BaseCollapseProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, ...restProps } = props

  return (
    <Collapse
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
