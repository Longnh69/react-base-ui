import { Input, type InputRef } from 'antd'
import { type PasswordProps } from 'antd/es/input'
import { type Ref, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export interface BaseInputPasswordProps extends PasswordProps {}

const { Password } = Input

export default forwardRef(function BaseInputPassword(props: BaseInputPasswordProps, ref: Ref<InputRef> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <Password
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
