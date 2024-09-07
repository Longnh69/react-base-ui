import { TimePicker, type TimePickerProps } from 'antd'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export type BaseTimePickerValue = ComponentProps<typeof TimePicker>['value']

export type BaseTimePickerProps = TimePickerProps & {}

export default forwardRef(function BaseTimePicker(props: BaseTimePickerProps, ref: Ref<any> | null) {
  const { className, ...restProps } = props
  const { t } = useTranslation()

  return (
    <TimePicker
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        className,
      )}
      placeholder={t('choose', { name: t('time') })}
      format='HH:mm:ss'
      {...restProps}
    />
  )
})
