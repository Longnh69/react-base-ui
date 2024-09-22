import { Flex, TimelineItemProps, Typography } from 'antd'
import _ from 'lodash'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseTimelineProcessDefaultIcon from '../icon/BaseTimelineProcessDefaultIcon'
import BaseTimelineProcessErrorIcon from '../icon/BaseTimelineProcessErrorIcon'
import BaseTimelineProcessProcessingIcon from '../icon/BaseTimelineProcessProcessingIcon'
import BaseTimelineProcessSuccessIcon from '../icon/BaseTimelineProcessSuccessIcon'
import BaseTimelineProcessWarningIcon from '../icon/BaseTimelineProcessWarningIcon'
import BaseTimeline, { type BaseTimelineProps } from './BaseTimeline'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseTimelineProcessProps extends BaseTimelineProps {
  current: number
  items: BaseTimelineProcessItemProps[]
  dotSuccess?: React.ReactNode
  dotError?: React.ReactNode
  dotProcessing?: React.ReactNode
  dotWarning?: React.ReactNode
  dotDefault?: React.ReactNode
}

export interface BaseTimelineProcessItemProps extends TimelineItemProps {
  status?: 'success' | 'error' | 'processing' | 'warning' | 'default'
  leftTitle?: ReactNode
  leftDescription?: ReactNode
  rightTitle?: ReactNode
  rightDescription?: ReactNode
}

export default function BaseTimelineProcess(props: BaseTimelineProcessProps) {
  const {
    className,
    styleCss,
    current = 1,
    dotSuccess,
    dotError,
    dotProcessing,
    dotWarning,
    dotDefault,
    items,
    ...restProps
  } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })

  const newDotSuccess = dotSuccess || <BaseTimelineProcessSuccessIcon />
  const newDotError = dotError || <BaseTimelineProcessErrorIcon />
  const newDotProcessing = dotProcessing || <BaseTimelineProcessProcessingIcon spin />
  const newDotWarning = dotWarning || <BaseTimelineProcessWarningIcon />
  const newDotDefault = dotDefault || <BaseTimelineProcessDefaultIcon />

  const renderItems = () => {
    return _.map(items, (item, index) => {
      const { status, leftTitle, leftDescription, rightTitle, rightDescription } = item
      const label = (
        <Flex className='mr-1.5 flex-col'>
          <Typography
            className={twMerge(
              'text-sm',
              _.eq(status, 'success') && 'text-green-121',
              _.eq(status, 'error') && 'text-red-121',
              _.eq(status, 'processing') && 'text-blue-104',
              _.eq(status, 'warning') && 'text-orange-121',
            )}
          >
            {leftTitle}
          </Typography>
          <Typography className='text-[10px] text-dark-60'>{leftDescription}</Typography>
        </Flex>
      )
      const children = (
        <Flex className='flex-col'>
          <Typography className='text-base font-semibold'>{rightTitle}</Typography>
          <Typography className='text-xs text-dark-60'>{rightDescription}</Typography>
        </Flex>
      )

      item.label = label
      item.children = children

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

  return (
    <BaseTimeline
      items={renderItems()}
      mode='left'
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
