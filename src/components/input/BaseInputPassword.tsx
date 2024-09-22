import { Input, type InputRef } from 'antd'
import { type PasswordProps } from 'antd/es/input'
import { type Ref, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseInputPasswordProps extends PasswordProps, PropsWithStyleCss {}

const { Password } = Input

export default forwardRef(function BaseInputPassword(props: BaseInputPasswordProps, ref: Ref<InputRef> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <Password
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      placeholder={t('enter', { name: t('content') })}
      {...restProps}
    />
  )
})
