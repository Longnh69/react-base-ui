import { Tooltip } from 'antd'
import { type TooltipPropsWithOverlay } from 'antd/es/tooltip'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTooltipProps extends TooltipPropsWithOverlay {
  hidden?: boolean
}

export default forwardRef(function BaseTooltip(props: BaseTooltipProps, ref) {
  const { hidden, className, children, ...restProps } = props

  if (hidden) {
    return <>{children}</>
  }

  return (
    <Tooltip
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    >
      {children}
    </Tooltip>
  )
})
