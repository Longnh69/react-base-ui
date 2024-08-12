import { Dropdown, type DropdownProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseDropdownProps extends DropdownProps {}

export default function BaseDropdown(props: BaseDropdownProps) {
  const { className, ...restProps } = props

  return (
    <Dropdown
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
