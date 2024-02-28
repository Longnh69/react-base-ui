import { DatePicker } from 'antd'
import { type DatePickerProps } from 'antd/lib'
import dayjs from 'dayjs'
import { type PickerPanelProps } from 'rc-picker/lib/PickerPanel'
import { type ComponentProps, forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export type BaseDateTimePickerValue = ComponentProps<typeof DatePicker>['value']

export type BaseDateTimePickerProps = DatePickerProps & Partial<PickerPanelProps> & {}

export default forwardRef(function BaseDateTimePicker(props: BaseDateTimePickerProps, ref: Ref<any> | null) {
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
      placeholder={t('choose', { name: t('date_time') })}
      format='DD/MM/YYYY HH:mm:ss'
      showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
      {...restProps}
    />
  )
})
