import { DatePicker } from 'antd'
import { type RangePickerProps } from 'antd/es/date-picker'
import dayjs, { type Dayjs } from 'dayjs'
import { type RangePickerProps as PickerPanelDateRangeProps } from 'rc-picker/lib'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

const { RangePicker } = DatePicker

export type BaseDateRangePickerValue = ComponentProps<typeof RangePicker>['value']

export type BaseDateRangePickerProps = RangePickerProps & Partial<PickerPanelDateRangeProps<Dayjs>> & PropsWithStyleCss

export default forwardRef(function BaseDateRangePicker(props: BaseDateRangePickerProps, ref: Ref<any> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <RangePicker
      ref={ref}
      allowClear
      allowEmpty={[true, true]}
      placeholder={[
        t('choose', { name: t('start_date'), defaultValue: 'Chọn ngày bắt đầu' }),
        t('choose', { name: t('end_date'), defaultValue: 'Chọn ngày kết thúc' }),
      ]}
      presets={[
        {
          label: t('today', { defaultValue: 'Hôm nay' }),
          value: [dayjs().startOf('day'), dayjs().endOf('day')],
        },
        {
          label: t('day_ago', { count: 7, defaultValue: '7 ngày trước' }),
          value: [dayjs().subtract(7, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: t('day_ago', { count: 15, defaultValue: '15 ngày trước' }),
          value: [dayjs().subtract(15, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: t('day_ago', { count: 30, defaultValue: '30 ngày trước' }),
          value: [dayjs().subtract(30, 'days').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
        },
        {
          label: t('this_week', { defaultValue: 'Tuần này' }),
          value: [dayjs().startOf('week'), dayjs().endOf('day')],
        },
        {
          label: t('last_week', { defaultValue: 'Tuần trước' }),
          value: [dayjs().subtract(1, 'week').startOf('week'), dayjs().subtract(1, 'week').endOf('week')],
        },
        {
          label: t('this_month', { defaultValue: 'Tháng này' }),
          value: [dayjs().startOf('month'), dayjs().endOf('day')],
        },
        {
          label: t('last_month', { defaultValue: 'Tháng trước' }),
          value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
        },
        {
          label: t('this_year', { defaultValue: 'Năm nay' }),
          value: [dayjs().startOf('year'), dayjs().endOf('day')],
        },
      ]}
      className={twMerge(
        `
          w-full
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
