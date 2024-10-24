import { DatePicker, GetProps } from 'antd'
import { Dayjs } from 'dayjs'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseDatePickerValue = ComponentProps<typeof DatePicker>['value']

export type BaseDatePickerProps<ValueType = Dayjs> = GetProps<typeof DatePicker<ValueType>> & PropsWithStyleCss & {}

export default forwardRef(function BaseDatePicker(props: BaseDatePickerProps, ref: Ref<any> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <DatePicker
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        className,
        dynamicClassName,
      )}
      placeholder={t('choose', { name: t('date') })}
      format='DD/MM/YYYY'
      {...restProps}
    />
  )
})
