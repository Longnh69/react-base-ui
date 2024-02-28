import { type BaseCheckboxGroupProps } from '../../checkbox/BaseCheckboxGroup'
import { type BaseInputProps } from '../../input/BaseInput'
import { type BaseDatePickerProps } from '../../picker/BaseDatePicker'
import { type BaseDateRangePickerProps } from '../../picker/BaseDateRangePicker'
import { type BaseDateTimePickerProps } from '../../picker/BaseDateTimePicker'
import { type BaseRadioGroupProps } from '../../radio/BaseRadioGroup'
import { type BaseSelectProps } from '../../select/BaseSelect'
import { type BaseTableFilterType, type DataIndex } from './base-table.type'

export type BaseTableFilterParams = BaseTableFilterType & {
  dataIndex: DataIndex
}

export type BaseTableInputFilterParams = BaseTableFilterParams & BaseInputProps & {}

export type BaseTableSelectFilterParams = BaseTableFilterParams & BaseSelectProps & {}

export type BaseTableCheckboxFilterParams = BaseTableFilterParams & BaseCheckboxGroupProps & {}

export type BaseTableRadioFilterParams = BaseTableFilterParams & BaseRadioGroupProps & {}

export type BaseTableDatePickerFilterParams = BaseTableFilterParams & BaseDatePickerProps & {}

export type BaseTableDateTimePickerFilterParams = BaseTableFilterParams & BaseDateTimePickerProps & {}

export type BaseTableDateRangePickerFilterParams = BaseTableFilterParams & BaseDateRangePickerProps & {}
