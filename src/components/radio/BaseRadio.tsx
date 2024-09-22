import { Radio, type CheckboxRef, type RadioProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseRadioProps extends RadioProps, PropsWithStyleCss {}

export default forwardRef(function BaseRadio(props: BaseRadioProps, ref: Ref<CheckboxRef> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Radio
      ref={ref}
      className={twMerge(
        `
          w-full
          [&>span:nth-child(2)]:w-full
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
