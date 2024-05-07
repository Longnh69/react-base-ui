import { Switch, type SwitchProps } from 'antd'
import { type LegacyRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseSwitchProps extends SwitchProps {}

export default forwardRef(function BaseSwitch(props: BaseSwitchProps, ref: LegacyRef<HTMLButtonElement> | undefined) {
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
