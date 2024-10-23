import { Calendar, CalendarProps } from 'antd'
import { Dayjs } from 'dayjs'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseCalendarProps extends CalendarProps<Dayjs>, PropsWithStyleCss {}

export default function BaseCalendar(props: BaseCalendarProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Calendar
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
