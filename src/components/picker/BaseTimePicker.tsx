import { TimePicker, type TimePickerProps } from 'antd'
import { forwardRef, type ComponentProps, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseTimePickerValue = ComponentProps<typeof TimePicker>['value']

export type BaseTimePickerProps = TimePickerProps & PropsWithStyleCss & {}

export default forwardRef(function BaseTimePicker(props: BaseTimePickerProps, ref: Ref<any> | null) {
  const { className, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <TimePicker
      ref={ref}
      className={twMerge(
        `
          w-full
        `,
        className,
        dynamicClassName,
      )}
      placeholder={t('choose', { name: t('time') })}
      format='HH:mm:ss'
      {...restProps}
    />
  )
})
