import { Checkbox } from 'antd'
import { type CheckboxGroupProps } from 'antd/es/checkbox'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseCheckboxGroupProps extends CheckboxGroupProps {
  vertical?: boolean
}

const { Group } = Checkbox

export default forwardRef(function BaseCheckboxGroup(props: BaseCheckboxGroupProps, ref: Ref<HTMLDivElement> | null) {
  const { className, vertical, ...restProps } = props

  return (
    <Group
      ref={ref}
      className={twMerge(
        `
          
        `,
        vertical && 'flex flex-col gap-1',
        className,
      )}
      {...restProps}
    />
  )
})
