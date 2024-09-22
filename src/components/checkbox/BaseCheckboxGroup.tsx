import { Checkbox } from 'antd'
import { type CheckboxGroupProps } from 'antd/es/checkbox'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseCheckboxGroupProps extends CheckboxGroupProps, PropsWithStyleCss {
  vertical?: boolean
}

const { Group } = Checkbox

export default forwardRef(function BaseCheckboxGroup(props: BaseCheckboxGroupProps, ref: Ref<HTMLDivElement> | null) {
  const { className, vertical, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Group
      ref={ref}
      className={twMerge(
        `
          
        `,
        vertical && 'flex flex-col gap-1',
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
