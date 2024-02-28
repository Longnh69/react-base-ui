import { InputNumber, type InputNumberProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseInputNumberProps extends InputNumberProps {}

export default forwardRef(function BaseInputNumber(props: BaseInputNumberProps, ref: Ref<HTMLInputElement>) {
  const { className, ...restProps } = props

  return <InputNumber ref={ref} controls={false} className={twMerge('', className)} {...restProps} />
})
