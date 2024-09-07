import { DatePicker } from 'antd'
import { type RangePickerProps } from 'antd/es/date-picker'
import dayjs, { Dayjs } from 'dayjs'
import { type RangePickerProps as PickerPanelDateTimeRangeProps } from 'rc-picker/lib'
import { type ComponentProps, forwardRef, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

const { RangePicker } = DatePicker

export type BaseDateTimeRangePickerValue = ComponentProps<typeof DatePicker>['value']

export type BaseDateTimeRangePickerProps = RangePickerProps & Partial<PickerPanelDateTimeRangeProps<Dayjs>> & {}

export default forwardRef(function BaseDateTimeRangePicker(props: BaseDateTimeRangePickerProps, ref: Ref<any> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <RangePicker
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        className,
      )}
      placeholder={[
        t('choose', { name: 'start_date', defaultValue: 'Chọn ngày bắt đầu' }),
        t('choose', { name: 'end_date', defaultValue: 'Chọn ngày kết thúc' }),
      ]}
      format='DD/MM/YYYY HH:mm:ss'
      showTime={{ defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('00:00:00', 'HH:mm:ss')] }}
      {...restProps}
    />
  )
})
