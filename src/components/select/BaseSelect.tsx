import ExpandDownIcon from '@/components/icon/BaseExpandDownIcon'
import { Select, type RefSelectProps, type SelectProps } from 'antd'
import _ from 'lodash'
import { forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export interface BaseSelectProps extends SelectProps {}

export default forwardRef(function BaseSelect(props: BaseSelectProps, ref: Ref<RefSelectProps> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <Select
      ref={ref}
      placeholder={t('choose', { name: t('value') })}
      suffixIcon={<ExpandDownIcon className='pointer-events-none' />}
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
      )}
      {...restProps}
    />
  )
})
