import { DatePicker, type DatePickerProps } from 'antd'
import { type PickerPanelProps } from 'rc-picker/lib/PickerPanel'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export type BaseDatePickerValue = ComponentProps<typeof DatePicker>['value']

export type BaseDatePickerProps = DatePickerProps & Partial<PickerPanelProps> & {}

export default forwardRef(function BaseDatePicker(props: BaseDatePickerProps, ref: Ref<any> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <DatePicker
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        className,
      )}
      placeholder={t('choose', { name: t('date') })}
      format='DD/MM/YYYY'
      {...restProps}
    />
  )
})
