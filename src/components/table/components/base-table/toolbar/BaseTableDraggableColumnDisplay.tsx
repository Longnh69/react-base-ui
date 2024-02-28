import {
  HolderOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons'
import { useSortable } from '@dnd-kit/sortable'
import { Flex } from 'antd'
import { type CheckboxChangeEvent } from 'antd/es/checkbox'
import _ from 'lodash'
import { type ReactNode } from 'react'
import BaseButton from '../../../../button/BaseButton'
import BaseCheckbox from '../../../../checkbox/BaseCheckbox'
import useBaseTable from '../../../hooks/useBaseTable'
import { twMerge } from 'tailwind-merge'

interface BaseTableDraggableColumnDisplayProps {
  id: number
  title: ReactNode
  fixed?: 'left' | 'right' | boolean
  disabled?: boolean
  draggable?: boolean
}

export default function BaseTableDraggableColumnDisplay<T>(props: BaseTableDraggableColumnDisplayProps) {
  const { id, title, fixed, disabled, draggable } = props
  const { showColumnIds, onColumnFixedChange, onShowColumnIdsChange } = useBaseTable<T>()
  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: id ?? '' })

  const commonStyle = {
    cursor: '',
    transition: 'unset',
  }

  const itemStyle = transform
    ? _.assign(
        {
          ...commonStyle,
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          transition: isDragging ? 'unset' : transition,
        },
        isDragging && {
          zIndex: 1,
        },
      )
    : commonStyle

  const handleCheckChange = (event: CheckboxChangeEvent) => {
    const { checked, value } = event.target

    if (checked) {
      onShowColumnIdsChange?.((prev) => _.concat(prev, value))
    } else {
      onShowColumnIdsChange?.((prev) => _.filter(prev, (item) => !_.eq(item, value)))
    }
  }

  return (
    <Flex
      gap={8}
      justify='space-between'
      className={twMerge('w-full', !draggable && 'ml-6')}
      {...(draggable ? { style: itemStyle, ref: setNodeRef, ...listeners } : {})}
    >
      <Flex className={twMerge('w-full', draggable ? 'gap-8' : 'gap-2')}>
        {draggable && <HolderOutlined className='cursor-grab' />}
        <BaseCheckbox
          className='w-[calc(100%-1rem)] [&:hover_span:nth-child(2)]:max-w-36 [&_span:nth-child(2)]:truncate'
          value={id}
          checked={_.includes(showColumnIds, id)}
          onChange={handleCheckChange}
          disabled={disabled}
        >
          <>{title}</>
        </BaseCheckbox>
      </Flex>
      <div className='absolute right-1.5 h-full'>
        <Flex gap={2} className='hidden h-full group-hover:flex group-active:flex'>
          {(fixed === 'right' || fixed === true || !fixed) && (
            <BaseButton
              type='link'
              className='h-full px-1 text-primary hover:opacity-70'
              onClick={() => {
                onColumnFixedChange?.(id, 'left')
              }}
            >
              <VerticalAlignTopOutlined />
            </BaseButton>
          )}
          {(fixed === 'left' || fixed === 'right') && (
            <BaseButton
              type='link'
              className='h-full px-1 text-primary hover:opacity-70'
              onClick={() => {
                onColumnFixedChange?.(id, false)
              }}
            >
              <VerticalAlignMiddleOutlined />
            </BaseButton>
          )}
          {(fixed === 'left' || fixed === true || !fixed) && (
            <BaseButton
              type='link'
              className='h-full px-1 text-primary hover:opacity-70'
              onClick={() => {
                onColumnFixedChange?.(id, 'right')
              }}
            >
              <VerticalAlignBottomOutlined />
            </BaseButton>
          )}
        </Flex>
      </div>
    </Flex>
  )
}
