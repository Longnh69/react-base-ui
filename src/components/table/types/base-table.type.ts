import { type TableColumnProps, type GetProp, type TableProps } from 'antd'
import { type Dispatch, type SetStateAction } from 'react'
import { type BaseCheckboxGroupProps } from '../../checkbox/BaseCheckboxGroup'
import { type BaseInputProps } from '../../input/BaseInput'
import { type BaseInputNumberProps } from '../../input/BaseInputNumber'
import { type BaseInputPasswordProps } from '../../input/BaseInputPassword'
import { type BaseInputTextAreaProps } from '../../input/BaseInputTextArea'
import { type BaseDatePickerProps } from '../../picker/BaseDatePicker'
import { type BaseDateRangePickerProps } from '../../picker/BaseDateRangePicker'
import { type BaseDateTimePickerProps } from '../../picker/BaseDateTimePicker'
import { type BaseTimePickerProps } from '../../picker/BaseTimePicker'
import { type BaseRadioGroupProps } from '../../radio/BaseRadioGroup'
import { type BaseSelectProps } from '../../select/BaseSelect'
import { type BaseTreeSelectProps } from '../../select/BaseTreeSelect'
import { type BaseSwitchProps } from '../../switch/BaseSwitch'
import { type BaseTableToolbarProps } from './base-table-toolbar.type'

export type DataIndex<T = any> = GetProp<TableColumnProps<T>, 'dataIndex'>

export type BaseTableProps<T> = TableProps<T> & {
  toolbar?: BaseTableToolbarProps<T>
  draggable?: boolean
  onSorterChange?: Dispatch<SetStateAction<Record<string, any>>>
}

export type BaseTableSizeType<T> = GetProp<BaseTableProps<T>, 'size'>

export type BaseTableFilterType = {
  filter?: Record<string, any>
  onFilterChange?: Dispatch<SetStateAction<Record<string, any>>>
}

export type BaseTableSorterType = {
  sorter?: Record<string, any>
  onSorterChange?: Dispatch<SetStateAction<Record<string, any>>>
}

export type BaseTableFieldProps =
  | BaseCheckboxGroupProps
  | BaseDatePickerProps
  | BaseDateRangePickerProps
  | BaseDateTimePickerProps
  | BaseTimePickerProps
  | BaseInputProps
  | BaseInputNumberProps
  | BaseInputPasswordProps
  | BaseInputTextAreaProps
  | BaseRadioGroupProps
  | BaseSelectProps
  | BaseSwitchProps
  | BaseTreeSelectProps

export type BaseTableMoreProps = BaseTableFilterType &
  BaseTableSorterType & {
    onRefresh?: () => void
  }
