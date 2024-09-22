import { Form, type FormItemProps } from 'antd'
import { RuleObject } from 'antd/es/form'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export type BaseRuleValidator = RuleObject['validator']

export type BaseRuleValidatorRequired = NonNullable<RuleObject['validator']>

export type BaseRuleValidators = NonNullable<BaseRuleValidator>[]

export interface BaseFormItemProps extends FormItemProps, PropsWithStyleCss {
  requiredMarkPosition?: 'left' | 'right'
  labelWrapperHidden?: boolean
  labelWrapperInvisible?: boolean
  labelHidden?: boolean
  labelInvisible?: boolean
}

export default function BaseFormItem(props: BaseFormItemProps) {
  const {
    className,
    styleCss,
    requiredMarkPosition = 'right',
    labelWrapperHidden,
    labelWrapperInvisible,
    labelHidden = false,
    labelInvisible = false,
    ...restProps
  } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Form.Item
      className={twMerge(
        labelWrapperHidden && '[&_.ant-form-item-label]:hidden',
        labelWrapperInvisible && '[&_.ant-form-item-label]:invisible',
        labelHidden && '[&_.ant-form-item-label>label]:hidden',
        labelInvisible && '[&_.ant-form-item-label>label]:invisible',
        !labelHidden && !labelInvisible
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
          : '',
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
