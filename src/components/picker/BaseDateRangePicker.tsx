import { DatePicker } from 'antd'
import { type RangePickerProps } from 'antd/es/date-picker'
import dayjs, { type Dayjs } from 'dayjs'
import { type RangePickerProps as PickerPanelDateRangeProps } from 'rc-picker/lib'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

const { RangePicker } = DatePicker

export type BaseDateRangePickerValue = ComponentProps<typeof RangePicker>['value']

export type BaseDateRangePickerProps = RangePickerProps & Partial<PickerPanelDateRangeProps<Dayjs>> & {}

export default forwardRef(function BaseDateRangePicker(props: BaseDateRangePickerProps, ref: Ref<any> | null) {
  const { className, ...restProps } = props

  const { t } = useTranslation()

  return (
    <RangePicker
      ref={ref}
      allowClear
      allowEmpty={[true, true]}
      placeholder={[
        t('choose', { name: 'start_date', defaultValue: 'Chọn ngày bắt đầu' }),
        t('choose', { name: 'end_date', defaultValue: 'Chọn ngày kết thúc' }),
      ]}
      presets={[
        {
          label: 'Hôm nay',
          value: [dayjs().startOf('day'), dayjs().endOf('day')],
        },
        {
          label: '7 ngày trước',
          value: [dayjs().subtract(7, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: '15 ngày trước',
          value: [dayjs().subtract(15, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: '30 ngày trước',
          value: [dayjs().subtract(30, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: 'Tuần này',
          value: [dayjs().startOf('week'), dayjs().endOf('day')],
        },
        {
          label: 'Tuần trước',
          value: [dayjs().subtract(1, 'week').startOf('week'), dayjs().subtract(1, 'week').endOf('week')],
        },
        {
          label: 'Tháng này',
          value: [dayjs().startOf('month'), dayjs().endOf('day')],
        },
        {
          label: 'Tháng trước',
          value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
        },
        {
          label: 'Năm nay',
          value: [dayjs().startOf('year'), dayjs().endOf('day')],
        },
      ]}
      className={twMerge(
        `
          w-full
        `,
        className,
      )}
      {...restProps}
    />
  )
})
