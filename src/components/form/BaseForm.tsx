import { Form, type FormInstance, type FormProps } from 'antd'
import { forwardRef, type ReactNode, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseFormProps extends FormProps {
  children: ReactNode
}

export default forwardRef(function BaseForm(props: BaseFormProps, ref: Ref<FormInstance<any>> | undefined) {
  const { className, ...restProps } = props

  return (
    <Form
      ref={ref}
      autoComplete='off'
      className={twMerge(
        `
          h-full w-full
        `,
        className,
      )}
      scrollToFirstError={{
        behavior: 'smooth',
        block: 'center',
      }}
      {...restProps}
    />
  )
})
