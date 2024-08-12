import { Form } from 'antd'
import { type FormListProps } from 'antd/es/form'

export interface BaseFormListProps extends FormListProps {}

export default function BaseFormList(props: BaseFormListProps) {
  const { ...restProps } = props

  return <Form.List {...restProps} />
}
