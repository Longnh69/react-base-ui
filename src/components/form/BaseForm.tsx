import { Form, type FormInstance, type FormProps } from 'antd'
import { forwardRef, type ReactNode, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseFormProps extends FormProps, PropsWithStyleCss {
  children: ReactNode
}

export default forwardRef(function BaseForm(props: BaseFormProps, ref: Ref<FormInstance<any>> | undefined) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Form
      ref={ref}
      autoComplete='off'
      className={twMerge(
        `
          h-full w-full
        `,
        className,
        dynamicClassName,
      )}
      scrollToFirstError={{
        behavior: 'smooth',
        block: 'center',
      }}
      {...restProps}
    />
  )
})
