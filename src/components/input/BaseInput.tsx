import { Input, type InputProps, type InputRef } from 'antd'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export interface BaseInputProps extends InputProps {}

export default forwardRef(function BaseInput(props: BaseInputProps, ref: Ref<InputRef> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <Input
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      placeholder={t('enter', { name: t('content') })}
      {...restProps}
    />
  )
})
