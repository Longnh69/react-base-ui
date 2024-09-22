import { Radio, type RadioGroupProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseRadioGroupProps extends RadioGroupProps, PropsWithStyleCss {
  vertical?: boolean
}

export default forwardRef(function BaseRadioGroup(props: BaseRadioGroupProps, ref: Ref<HTMLInputElement> | null) {
  const { className, vertical, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Radio.Group
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        vertical && 'flex flex-col gap-1',
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
