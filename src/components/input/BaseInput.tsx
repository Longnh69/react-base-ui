import { Input, type InputProps, type InputRef } from 'antd'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseInputProps extends InputProps, PropsWithStyleCss {}

export default forwardRef(function BaseInput(props: BaseInputProps, ref: Ref<InputRef> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <Input
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
