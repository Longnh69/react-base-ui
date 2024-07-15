import { Timeline, TimelineProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseTimelineProps extends TimelineProps {}

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
