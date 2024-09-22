import { Timeline, TimelineItemProps, type TimelineProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseTimelineProps extends TimelineProps, PropsWithStyleCss {}

export interface BaseTimelineItemProps extends TimelineItemProps {}

export default function BaseTimeline(props: BaseTimelineProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Timeline
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
