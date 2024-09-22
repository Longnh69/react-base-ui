import { Checkbox, type CheckboxProps, type CheckboxRef, type GetProp } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseCheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number]

export interface BaseCheckboxProps extends CheckboxProps, PropsWithStyleCss {}

export default forwardRef(function BaseCheckbox(props: BaseCheckboxProps, ref: Ref<CheckboxRef> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Checkbox
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
