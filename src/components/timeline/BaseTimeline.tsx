import { Timeline, TimelineItemProps, type TimelineProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseTimelineProps extends TimelineProps {}

export interface BaseTimelineItemProps extends TimelineItemProps {}

export default function BaseTimeline(props: BaseTimelineProps) {
  const { className, ...restProps } = props

  return (
    <Timeline
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
}
