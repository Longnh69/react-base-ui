import { Popover, type PopoverProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

interface BasePopoverProps extends PopoverProps {}

export default forwardRef(function BasePopover(props: BasePopoverProps, ref: Ref<HTMLDivElement> | null) {
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
