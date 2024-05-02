import { Spin, type SpinProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseSpinProps extends SpinProps {}

export default function BaseSpin(props: BaseSpinProps) {
  const { className, ...restProps } = props

  return (
    <Spin
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
