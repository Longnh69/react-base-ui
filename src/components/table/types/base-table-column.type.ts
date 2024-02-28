import { type EFieldType } from '@/enums/field.enum'
import { type RequiredFields } from '@/helpers/type.helper'
import { type FormRule } from 'antd'
import { type ColumnType } from 'antd/es/table'
import { type BaseTableFieldProps, type DataIndex } from './base-table.type'

/**
 * @description
 * Use with fieldType: EFieldType and baseTableUtil.getFilterProps()
 * Example:
 * {
 *   editable: true,
 *   fieldType: EFieldType.Input,
 *   ...baseTableUtil.getInputFilterProps({
 *     dataIndex: 'username',
 *     placeholder: t('search_by', { name: t('username') }),
 *     filter,
 *     onFilterChange,
 *   }),
 * }
 */
type EditableColumnType<T> =
  | {
      editable?: never
      fieldType?: never
      fieldProps?: never
    }
  | {
      editable: boolean | ((_value: any, record: T, index?: number) => boolean)
      fieldType: EFieldType
      fieldProps?: BaseTableFieldProps
    }

type SorterCoumnType = {
  sorterDataIndex?: DataIndex
}

type MoreColumnType<T> = EditableColumnType<T> &
  SorterCoumnType & {
    rules?: FormRule[]
    id?: number
  }

export type BaseColumnType<T> = ColumnType<T> & MoreColumnType<T> & {}

export type BaseColumnGroupType<T> = Omit<BaseColumnType<T>, 'dataIndex' | keyof MoreColumnType<T>> & {
  id?: number
  children: BaseColumnsType<T>
}

export type BaseColumnsType<T> = Array<BaseColumnType<T> | BaseColumnGroupType<T>>

type BaseColumnTypeRequiredId<T> = RequiredFields<BaseColumnType<T>, 'id'>

type BaseColumnGroupTypeRequiredId<T> = Omit<BaseColumnType<T>, 'dataIndex' | keyof MoreColumnType<T>> & {
  id: number
  children: BaseColumnTypeRequiredId<T>
}

export type BaseColumnsTypeRequiredId<T> = Array<BaseColumnTypeRequiredId<T> | BaseColumnGroupTypeRequiredId<T>>
