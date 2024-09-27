import { SettingOutlined } from '@ant-design/icons'
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Col, Flex, Row } from 'antd'
import { type CheckboxChangeEvent } from 'antd/es/checkbox'
import _ from 'lodash'
import { type ReactNode } from 'react'
import BaseButton from '../../../../button/BaseButton'
import BaseCheckbox from '../../../../checkbox/BaseCheckbox'
import BasePopover from '../../../../popover/BasePopover'
import BaseTypography from '../../../../typography/BaseTypography'
import useBaseTable from '../../../hooks/useBaseTable'
import { type BaseColumnsTypeRequiredId } from '../../../types/base-table-column.type'
import { type BaseTableToolbarSettingProps } from '../../../types/base-table-toolbar.type'
import BaseTableDraggableColumnDisplay from './BaseTableDraggableColumnDisplay'

export default function BaseTableToolbarSetting<T>(props: BaseTableToolbarSettingProps<T>) {
  const { initial } = props
  const {
    allColumns,
    showColumnIds,
    fixedLeftColumns,
    fixedRightColumns,
    unFixedColumns,
    onColumnsChange,
    onColumnsDisplayReset,
    onShowColumnIdsChange,
  } = useBaseTable<T>()

  const disabledKeys = _.map(initial, (value, key) => (value?.disabled ? key : null)).filter(Boolean)
  const disabledColumns = _.filter(allColumns, (column) => _.includes(disabledKeys, column.key))
  const disabledIds = _.compact(_.map(disabledColumns, 'id'))
  const checkAll = _.eq(_.size(showColumnIds), _.size(allColumns))
  const indeterminate = _.size(showColumnIds) > _.size(disabledIds) && _.size(showColumnIds) < _.size(allColumns)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
  )

  const handleDragEnd = async (event: DragEndEvent) => {
    try {
      const { active, over } = event

      if (!over) {
        return
      }

      if (!_.eq(active.id, over.id)) {
        const list = _.cloneDeep(allColumns) ?? []
        const oldIndex = list.findIndex((item) => item.id === active.id)
        const newIndex = list.findIndex((item) => item.id === over.id)

        onColumnsChange?.(arrayMove(list, oldIndex, newIndex))
      }
    } catch (__) {}
  }

  const handleCheckAllChange = (event: CheckboxChangeEvent) => {
    onShowColumnIdsChange?.(event.target.checked ? _.compact(_.map(allColumns, 'id')) : disabledIds)
  }

  console.log('re-render')

  return (
    <BasePopover
      trigger='click'
      placement='topRight'
      content={
        <Flex gap={12} vertical className='w-64'>
          <Flex justify='space-between'>
            <BaseCheckbox
              className='items-center'
              indeterminate={indeterminate}
              checked={checkAll}
              onChange={handleCheckAllChange}
            >
              Hiển thị cột
            </BaseCheckbox>
            <BaseButton type='link' className='px-0' onClick={onColumnsDisplayReset}>
              Cài lại
            </BaseButton>
          </Flex>
          <Row gutter={[12, 12]}>
            {_.map([fixedLeftColumns, unFixedColumns, fixedRightColumns], (list, index) => {
              if (_.size(list)) {
                return (
                  <Col key={index} span={24}>
                    <Flex vertical gap={6}>
                      {_.size(fixedLeftColumns) || _.size(fixedRightColumns) ? (
                        <div className='ml-8'>
                          <BaseTypography className='text-light-fdfdfd1f595 text-xs'>
                            {(() => {
                              switch (index) {
                                case 0: {
                                  return 'Cố định bên trái'
                                }
                                case 1: {
                                  return 'Chưa cố định'
                                }
                                case 2: {
                                  return 'Cố định bên phải'
                                }
                                default: {
                                  return <></>
                                }
                              }
                            })()}
                          </BaseTypography>
                        </div>
                      ) : (
                        <></>
                      )}
                      <Flex className='bg-dark-141414 rounded-md p-2'>
                        <Row gutter={[8, 8]} className='w-full'>
                          <DndContext
                            collisionDetection={closestCenter}
                            sensors={sensors}
                            modifiers={[restrictToWindowEdges]}
                            onDragEnd={handleDragEnd}
                          >
                            <SortableContext
                              items={list as BaseColumnsTypeRequiredId<T>}
                              strategy={verticalListSortingStrategy}
                            >
                              {_.map(list, (item, index) => {
                                const { id, title, key, fixed } = item

                                return (
                                  <Col key={index} span={24} className='group relative w-full'>
                                    <BaseTableDraggableColumnDisplay
                                      id={id ?? 0}
                                      title={title as ReactNode}
                                      fixed={fixed}
                                      disabled={_.includes(disabledKeys, key)}
                                      draggable={_.size(list) > 1}
                                    />
                                  </Col>
                                )
                              })}
                            </SortableContext>
                          </DndContext>
                        </Row>
                      </Flex>
                    </Flex>
                  </Col>
                )
              }
            })}
          </Row>
        </Flex>
      }
      arrow={false}
    >
      <BaseButton color='white'>
        <SettingOutlined />
      </BaseButton>
    </BasePopover>
  )
}
