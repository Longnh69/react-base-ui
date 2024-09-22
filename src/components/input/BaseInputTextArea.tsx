import { Input, type InputRef } from 'antd'
import { type TextAreaProps } from 'antd/es/input'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseInputTextAreaProps extends TextAreaProps, PropsWithStyleCss {}

const { TextArea } = Input

export default forwardRef(function BaseInputTextArea(props: BaseInputTextAreaProps, ref: Ref<InputRef> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <TextArea
      ref={ref}
      className={twMerge(
        `
          [&_textarea]:scrollbar
        `,
        className,
        dynamicClassName,
      )}
      placeholder={t('enter', { name: t('content') })}
      {...restProps}
    />
  )
})
