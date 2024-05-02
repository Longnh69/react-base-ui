import { HolderOutlined } from '@ant-design/icons'
import { useSortable } from '@dnd-kit/sortable'
import _ from 'lodash'
import BaseButton from '../button/BaseButton'
import BaseCard, { type BaseCardProps } from './BaseCard'

interface BaseDraggableCardProps extends BaseCardProps {}

export default function BaseDraggableCard(props: BaseDraggableCardProps) {
  const { id, actions, ...restProps } = props
  const { listeners, setNodeRef, transform, transition, isDragging, isOver } = useSortable({ id: id ?? '' })

  const commonStyle = {
    cursor: 'move',
    transition: 'unset',
  }

  const cardStyle = transform
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

  return (
    <div className='relative'>
      {isOver && <div className='absolute inset-0 rounded-lg border-2 border-dashed border-blue-200' />}
      <BaseCard
        style={cardStyle}
        ref={setNodeRef}
        actions={_.concat(actions, [
          <BaseButton
            key='move'
            type='link'
            title='Giữ chuột và di chuyển để sắp xếp'
            className='cursor-move'
            {...listeners}
          >
            <HolderOutlined />
          </BaseButton>,
        ])}
        {...restProps}
      />
    </div>
  )
}
