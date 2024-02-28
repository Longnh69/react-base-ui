import { type EFieldType } from '@/enums/field.enum'
import { type FormRule } from 'antd'
import { type ThHTMLAttributes, type HTMLAttributes, type TdHTMLAttributes } from 'react'
import { type BaseTableFieldProps, type DataIndex } from './base-table.type'
import { type AnimationDefinition, type PanInfo } from 'framer-motion'

type BaseTableCellAnimation = {
  animation?: boolean
  onAnimationStart?: (definition: AnimationDefinition) => void
  onDragStart?: (event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => void
  onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  onDrag?: (event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => void
}

export type BaseTableBodyCellProps = HTMLAttributes<any> &
  TdHTMLAttributes<any> &
  BaseTableCellAnimation & {
    dataIndex?: DataIndex
    rules?: FormRule[]
    isEditing?: boolean
    editable?: boolean
    fieldType?: EFieldType
    fieldProps?: BaseTableFieldProps
    ellipsis?:
      | {
          showTitle?: boolean
        }
      | boolean
  }

export type BaseTableHeaderCellProps = HTMLAttributes<any> & ThHTMLAttributes<any> & BaseTableCellAnimation & {}
