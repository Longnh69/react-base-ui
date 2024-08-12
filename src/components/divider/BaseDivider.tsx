import { Divider, DividerProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseDividerProps extends DividerProps {}

export default function BaseDivider(props: BaseDividerProps) {
  const { className, ...restProps } = props

  return (
    <Divider
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
