import { Spin, type SpinProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseSpinProps extends SpinProps, PropsWithStyleCss {}

export default function BaseSpin(props: BaseSpinProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Spin
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
