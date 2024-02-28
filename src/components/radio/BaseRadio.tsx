import { Radio, type CheckboxRef, type RadioProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseRadioProps extends RadioProps {}

export default forwardRef(function BaseRadio(props: BaseRadioProps, ref: Ref<CheckboxRef> | null) {
  const { className, ...restProps } = props

  return (
    <Radio
      ref={ref}
      className={twMerge(
        `
          w-full
          [&>span:nth-child(2)]:w-full
        `,
        className,
      )}
      {...restProps}
    />
  )
})
