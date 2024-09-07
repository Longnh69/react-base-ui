import { TimePicker } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import { Dayjs } from 'dayjs'
import { type RangePickerProps as PickerPanelTimeRangeProps } from 'rc-picker/lib'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

const { RangePicker } = TimePicker

export type BaseTimeRangePickerValue = ComponentProps<typeof RangePicker>['value']

export type BaseTimeRangePickerProps = RangePickerProps & Partial<PickerPanelTimeRangeProps<Dayjs>> & {}

export default forwardRef(function BaseTimeRangePicker(props: BaseTimeRangePickerProps, ref: Ref<any> | null) {
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
        t('choose', { name: 'start_time', defaultValue: 'Chọn thời gian bắt đầu' }),
        t('choose', { name: 'end_time', defaultValue: 'Chọn thời gian kết thúc' }),
      ]}
      format='HH:mm:ss'
      {...restProps}
    />
  )
})
