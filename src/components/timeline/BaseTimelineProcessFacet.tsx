import _ from 'lodash'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseTimelineProcessDefaultIcon from '../icon/BaseTimelineProcessDefaultIcon'
import BaseTimelineProcessErrorIcon from '../icon/BaseTimelineProcessErrorIcon'
import BaseTimelineProcessProcessingIcon from '../icon/BaseTimelineProcessProcessingIcon'
import BaseTimelineProcessSuccessIcon from '../icon/BaseTimelineProcessSuccessIcon'
import BaseTimelineProcessWarningIcon from '../icon/BaseTimelineProcessWarningIcon'
import BaseTimeline, { type BaseTimelineItemProps, type BaseTimelineProps } from './BaseTimeline'
export interface BaseTimelineProcessFacetProps extends Omit<BaseTimelineProps, 'facet'> {
  current?: number
  dotSuccess?: React.ReactNode
  dotError?: React.ReactNode
  dotProcessing?: React.ReactNode
  dotWarning?: React.ReactNode
  dotDefault?: React.ReactNode
}

export interface BaseTimelineProcessFacetItemProps extends BaseTimelineItemProps {}

export default function BaseTimelineProcessFacet(props: BaseTimelineProcessFacetProps) {
  const {
    className,
    current = 1,
    dotSuccess,
    dotError,
    dotProcessing,
    dotWarning,
    dotDefault,
    items,
    ...restProps
  } = props

  const newDotSuccess = dotSuccess || <BaseTimelineProcessSuccessIcon />
  const newDotError = dotError || <BaseTimelineProcessErrorIcon />
  const newDotProcessing = dotProcessing || <BaseTimelineProcessProcessingIcon spin />
  const newDotWarning = dotWarning || <BaseTimelineProcessWarningIcon />
  const newDotDefault = dotDefault || <BaseTimelineProcessDefaultIcon />

  const [newItems, setNewItems] = useState<BaseTimelineProcessFacetItemProps[]>(items || [])

  const renderItems = () => {
    return _.map(newItems, (item, index) => {
      const { status } = item

      if (_.eq(index + 1, current)) {
        return {
          ...item,
          dot: newDotProcessing,
          className: 'timeline-item-process',
        }
      }

      if (index + 1 < current) {
        switch (status) {
          case 'warning': {
            return {
              ...item,
              dot: newDotWarning,
              className: 'timeline-item-warning',
            }
          }
          case 'error': {
            return {
              ...item,
              dot: newDotError,
              className: 'timeline-item-error',
            }
          }
          default: {
            return {
              ...item,
              dot: newDotSuccess,
              className: 'timeline-item-success',
            }
          }
        }
      }

      return {
        ...item,
        dot: newDotDefault,
        className: 'timeline-item-default',
      }
    })
  }

  useEffect(() => {
    setNewItems(items || [])
  }, [items])

  return (
    <BaseTimeline
      items={renderItems()}
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
}
