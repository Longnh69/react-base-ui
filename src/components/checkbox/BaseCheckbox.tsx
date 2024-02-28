import { Checkbox, type CheckboxProps, type CheckboxRef, type GetProp } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export type BaseCheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number]

export interface BaseCheckboxProps extends CheckboxProps {}

export default forwardRef(function BaseCheckbox(props: BaseCheckboxProps, ref: Ref<CheckboxRef> | null) {
  const { className, ...restProps } = props

  return (
    <Checkbox
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
