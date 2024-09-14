import { Timeline, type TimelineItemProps, type TimelineProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseTimelineProcessFacet from './BaseTimelineProcessFacet'

export interface BaseTimelineProps extends TimelineProps {
  facet?: 'process' | 'default'
  current?: number
  items?: BaseTimelineItemProps[]
}

export interface BaseTimelineItemProps extends TimelineItemProps {
  status?: 'success' | 'error' | 'processing' | 'warning' | 'default'
}

export default function BaseTimeline(props: BaseTimelineProps) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'process': {
      return <BaseTimelineProcessFacet className={className} {...restProps} />
    }
    default: {
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
  }
}
