import { Popover, type PopoverProps } from 'antd'
import { twMerge } from 'tailwind-merge'

interface BasePopoverProps extends PopoverProps {}

export default function BasePopover(props: BasePopoverProps) {
  const { className, ...restProps } = props

  return (
    <Popover
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
}
