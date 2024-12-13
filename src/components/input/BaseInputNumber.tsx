import { InputNumber, type InputNumberProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import { useTranslation } from 'react-i18next'

export interface BaseInputNumberProps extends InputNumberProps, PropsWithStyleCss {}

export default forwardRef(function BaseInputNumber(props: BaseInputNumberProps, ref: Ref<HTMLInputElement>) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <InputNumber
      ref={ref}
      controls={false}
      placeholder={t('enter', { name: t('value'), defaultValue: 'Nhập giá trị' })}
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
