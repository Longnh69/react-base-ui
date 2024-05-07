import { Popover, type PopoverProps } from 'antd'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface BasePopoverProps extends PopoverProps {}

export default forwardRef(function BasePopover(props: BasePopoverProps, ref) {
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
