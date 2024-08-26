import { Form, type GetProp } from 'antd'
import { type FormListProps } from 'antd/es/form'

export type BaseFormListValidator = GetProp<FormListProps, 'rules'>[number]['validator']

export type BaseFormListValidatorRules = GetProp<FormListProps, 'rules'>

export interface BaseFormListProps extends FormListProps {}

export default function BaseFormList(props: BaseFormListProps) {
  const { ...restProps } = props

  return <Form.List {...restProps} />
}
