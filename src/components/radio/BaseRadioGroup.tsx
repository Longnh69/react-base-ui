import { Radio, type RadioGroupProps } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseRadioGroupProps extends RadioGroupProps {
  vertical?: boolean
}

export default forwardRef(function BaseRadioGroup(props: BaseRadioGroupProps, ref: Ref<HTMLInputElement> | null) {
  const { className, vertical, ...restProps } = props

  return (
    <Radio.Group
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        vertical && 'flex flex-col gap-1',
        className,
      )}
      {...restProps}
    />
  )
})
