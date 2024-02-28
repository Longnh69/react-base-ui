import { EFieldType } from '@/enums/field.enum'
import { motion } from 'framer-motion'
import _ from 'lodash'
import BaseCheckboxGroup, { type BaseCheckboxGroupProps } from '../../../checkbox/BaseCheckboxGroup'
import BaseFormItem from '../../../form/BaseFormItem'
import BaseInput, { type BaseInputProps } from '../../../input/BaseInput'
import BaseInputNumber, { type BaseInputNumberProps } from '../../../input/BaseInputNumber'
import BaseInputPassword, { type BaseInputPasswordProps } from '../../../input/BaseInputPassword'
import BaseInputTextArea, { type BaseInputTextAreaProps } from '../../../input/BaseInputTextArea'
import BaseDatePicker, { type BaseDatePickerProps } from '../../../picker/BaseDatePicker'
import BaseDateRangePicker, { type BaseDateRangePickerProps } from '../../../picker/BaseDateRangePicker'
import BaseDateTimePicker, { type BaseDateTimePickerProps } from '../../../picker/BaseDateTimePicker'
import BaseTimePicker, { type BaseTimePickerProps } from '../../../picker/BaseTimePicker'
import BaseRadioGroup, { type BaseRadioGroupProps } from '../../../radio/BaseRadioGroup'
import BaseSelect, { type BaseSelectProps } from '../../../select/BaseSelect'
import BaseTreeSelect, { type BaseTreeSelectProps } from '../../../select/BaseTreeSelect'
import BaseSwitch, { type BaseSwitchProps } from '../../../switch/BaseSwitch'
import BaseText from '../../../typography/BaseText'
import { type BaseTableBodyCellProps } from '../../types/base-table-cell.type'

export default function BaseTableBodyCell(props: BaseTableBodyCellProps) {
  const { dataIndex, rules, isEditing, fieldType, fieldProps, children, ellipsis, animation, ...restProps } = props
  const childrenNth2 = children && _.isArray(children) && _.nth(children, 1)
  let fieldNode
  let renderNode = children

  switch (fieldType) {
    case EFieldType.Checkbox: {
      fieldNode = <BaseCheckboxGroup {...(fieldProps as BaseCheckboxGroupProps)} />
      break
    }
    case EFieldType.DatePicker: {
      fieldNode = <BaseDatePicker {...(fieldProps as BaseDatePickerProps)} />
      break
    }
    case EFieldType.DateRangePicker: {
      fieldNode = <BaseDateRangePicker {...(fieldProps as BaseDateRangePickerProps)} />
      break
    }
    case EFieldType.DateTimePicker: {
      fieldNode = <BaseDateTimePicker {...(fieldProps as BaseDateTimePickerProps)} />
      break
    }
    case EFieldType.TimePicker: {
      fieldNode = <BaseTimePicker {...(fieldProps as BaseTimePickerProps)} />
      break
    }
    case EFieldType.Input: {
      fieldNode = <BaseInput {...(fieldProps as BaseInputProps)} />
      break
    }
    case EFieldType.InputNumber: {
      fieldNode = <BaseInputNumber {...(fieldProps as BaseInputNumberProps)} />
      break
    }
    case EFieldType.InputPassword: {
      fieldNode = <BaseInputPassword {...(fieldProps as BaseInputPasswordProps)} />
      break
    }
    case EFieldType.InputTextArea: {
      fieldNode = <BaseInputTextArea {...(fieldProps as BaseInputTextAreaProps)} />
      break
    }
    case EFieldType.Radio: {
      fieldNode = <BaseRadioGroup {...(fieldProps as BaseRadioGroupProps)} />
      break
    }
    case EFieldType.Select: {
      fieldNode = <BaseSelect {...(fieldProps as BaseSelectProps)} />
      break
    }
    case EFieldType.Switch: {
      fieldNode = <BaseSwitch {...(fieldProps as BaseSwitchProps)} />
      break
    }
    case EFieldType.TreeSelect: {
      fieldNode = <BaseTreeSelect {...(fieldProps as BaseTreeSelectProps)} />
      break
    }
    default: {
      fieldNode = <BaseInput {...(fieldProps as BaseInputProps)} />
      break
    }
  }

  const item = (
    <BaseFormItem
      name={dataIndex}
      className='mb-0'
      valuePropName={_.includes([EFieldType.Checkbox, EFieldType.Switch], fieldType) ? 'checked' : undefined}
      rules={rules}
    >
      {fieldNode}
    </BaseFormItem>
  )

  if (isEditing) {
    renderNode = item
  }

  if (_.isString(childrenNth2) && ellipsis) {
    renderNode = (
      <BaseText
        ellipsis={{
          tooltip: {
            title: childrenNth2,
            overlayClassName: 'text-xs whitespace-pre-line',
          },
        }}
        title={
          _.isPlainObject(ellipsis) &&
          (
            ellipsis as {
              showTitle?: boolean | undefined
            }
          ).showTitle
            ? childrenNth2
            : ''
        }
      >
        {childrenNth2}
      </BaseText>
    )
  }

  if (animation) {
    return (
      <motion.td
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ x: -200, opacity: 0, transition: { duration: 0.5 } }}
        {...restProps}
      >
        {renderNode}
      </motion.td>
    )
  }

  return <td {...restProps}>{renderNode}</td>
}
