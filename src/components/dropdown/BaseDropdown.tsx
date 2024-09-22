import { Dropdown, type DropdownProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseDropdownProps extends DropdownProps, PropsWithStyleCss {}

export default function BaseDropdown(props: BaseDropdownProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Dropdown
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
