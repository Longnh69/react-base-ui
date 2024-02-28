import { Switch, type SwitchProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseSwitchProps extends SwitchProps {}

export default forwardRef(function BaseSwitch(props: BaseSwitchProps, ref: Ref<HTMLElement> | null) {
  const { className, ...restProps } = props

  return (
    <Switch
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
