import { MenuOutlined } from '@ant-design/icons'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Form, type FormInstance } from 'antd'
import { Children, cloneElement, createContext, type CSSProperties, type ReactElement } from 'react'
import BaseForm from '../../../form/BaseForm'
import { type BaseTableBodyRowProps } from '../../types/base-table-row.type'

const BaseTableBodyRowContext = createContext<FormInstance | null>(null)

export default function BaseTableBodyRow(props: BaseTableBodyRowProps) {
  const form = Form.useFormInstance()
  const { children, draggable, ...restProps } = props

  // Bảng áp dụng draggable
  if (draggable) {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
      id: props['data-row-key'], // rowKey in <BaseTable rowKey='' />
    })

    const style: CSSProperties = {
      transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
      transition,
      ...(isDragging ? { position: 'relative', zIndex: 1 } : {}),
    }

    return (
      <BaseForm form={form} component={false}>
        <BaseTableBodyRowContext.Provider value={form}>
          <tr
            {...restProps}
            {...{
              ref: setNodeRef,
              style,
              ...attributes,
              className: 'cursor-auto',
            }}
          >
            {Children.map(children, (child) => {
              if ((child as ReactElement).key === 'draggable') {
                return cloneElement(child as ReactElement, {
                  children: (
                    <MenuOutlined ref={setActivatorNodeRef} className='cursor-move touch-none' {...listeners} />
                  ),
                })
              }
              return child
            })}
          </tr>
        </BaseTableBodyRowContext.Provider>
      </BaseForm>
    )
  }

  return <tr {...restProps}>{children}</tr>
}
