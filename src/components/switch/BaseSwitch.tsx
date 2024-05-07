import { Switch, type SwitchProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseSwitchProps extends SwitchProps {}

export default function BaseSwitch(props: BaseSwitchProps) {
  const { className, ...restProps } = props

  return (
    <Switch
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
