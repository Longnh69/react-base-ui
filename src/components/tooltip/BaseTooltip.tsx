import { Tooltip } from 'antd'
import { type TooltipPropsWithOverlay } from 'antd/es/tooltip'
import { twMerge } from 'tailwind-merge'

export interface BaseTooltipProps extends TooltipPropsWithOverlay {
  hidden?: boolean
}

export default function BaseTooltip(props: BaseTooltipProps) {
  const { hidden, className, children, ...restProps } = props

  if (hidden) {
    return <>{children}</>
  }

  return (
    <Tooltip
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
}
