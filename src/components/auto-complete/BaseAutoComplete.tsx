import { AutoComplete, AutoCompleteProps, type RefSelectProps } from 'antd'
import _ from 'lodash'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseAutoCompleteProps extends AutoCompleteProps, PropsWithStyleCss {}

export default forwardRef(function BaseAutoComplete(props: BaseAutoCompleteProps, ref: Ref<RefSelectProps> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <AutoComplete
      ref={ref}
      placeholder={t('choose', { name: t('value') })}
      filterOption={(inputValue: string, option) => {
        const inputValueLowerCase = inputValue.toLowerCase()
        const { children, label, value } = option ?? {}

        return (
          _.includes(_.toLower(_.toString(children)), inputValueLowerCase) ||
          _.includes(_.toLower(_.toString(label)), inputValueLowerCase) ||
          _.includes(_.toLower(_.toString(value)), inputValueLowerCase)
        )
      }}
      className={twMerge(
        `
          min-w-24
          [&_.ant-select-selection-item]:flex [&_.ant-select-selection-item]:items-center
          [&_.ant-select-selection-overflow-item]:py-0.5
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
