import { Popover, type PopoverProps } from 'antd'
import { type TooltipRef } from 'antd/es/tooltip'
import { forwardRef, type LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface BasePopoverProps extends PopoverProps {}

export default forwardRef(function BasePopover(props: BasePopoverProps, ref: LegacyRef<TooltipRef> | undefined) {
  const { className, ...restProps } = props

  return (
    <Popover
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
