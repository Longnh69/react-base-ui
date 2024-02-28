import { Input, type InputRef } from 'antd'
import { type TextAreaProps } from 'antd/es/input'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export interface BaseInputTextAreaProps extends TextAreaProps {}

const { TextArea } = Input

export default forwardRef(function BaseInputTextArea(props: BaseInputTextAreaProps, ref: Ref<InputRef> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <TextArea
      ref={ref}
      className={twMerge(
        `
          [&_textarea]:scrollbar
        `,
        className,
      )}
      placeholder={t('enter', { name: t('content') })}
      {...restProps}
    />
  )
})
