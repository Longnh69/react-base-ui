import { Tooltip } from 'antd'
import { type TooltipPropsWithOverlay, type TooltipRef } from 'antd/es/tooltip'
import { LegacyRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTooltipProps extends TooltipPropsWithOverlay {
  hidden?: boolean
}

export default forwardRef(function BaseTooltip(props: BaseTooltipProps, ref: LegacyRef<TooltipRef> | undefined) {
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
