import { Form, type FormItemProps } from 'antd'
import { RuleObject } from 'antd/es/form'
import { twMerge } from 'tailwind-merge'

export type BaseRuleValidator = RuleObject['validator']

export type BaseRuleValidators = NonNullable<BaseRuleValidator>[]

export interface BaseFormItemProps extends FormItemProps {
  requiredMarkPosition?: 'left' | 'right'
  noLabel?: boolean
}

export default function BaseFormItem(props: BaseFormItemProps) {
  const { className, requiredMarkPosition, noLabel = false, ...restProps } = props

  return (
    <Form.Item
      className={twMerge(
        !noLabel
          ? [
              '[&_.ant-form-item-label>label]:dark:text-light-65',
              requiredMarkPosition === 'right' &&
                `
                  [&_.ant-form-item-label>label.ant-form-item-required]:before:absolute 
                  [&_.ant-form-item-label>label.ant-form-item-required]:before:-right-1
                  [&_.ant-form-item-label>label.ant-form-item-required]:before:-top-0
                  [&_.ant-form-item-label>label.ant-form-item-required]:before:content-['*']
                `,
            ]
          : '[&_.ant-form-item-label>label]:hidden',
        className,
      )}
      {...restProps}
    />
  )
}
