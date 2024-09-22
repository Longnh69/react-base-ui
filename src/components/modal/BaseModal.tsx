import { Modal, type ModalProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseDivider from '../divider/BaseDivider'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseModalProps extends ModalProps, PropsWithStyleCss {
  divider?: boolean
}

export default function BaseModal(props: BaseModalProps) {
  const { className, rootClassName, children, divider = true, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Modal
      className={twMerge(
        `
          
        `,
        divider ? 'p-0' : '',
        className,
        dynamicClassName,
      )}
      rootClassName={twMerge(
        `
        `,
        divider
          ? `
            [&_.ant-modal-content]:p-0
            [&_.ant-modal-content>.ant-modal-header]:px-6
            [&_.ant-modal-content>.ant-modal-header]:pt-5
            [&_.ant-modal-content>.ant-modal-header]:pb-2
            [&_.ant-modal-content>.ant-modal-footer]:m-0
            [&_.ant-modal-content>.ant-modal-footer]:px-6
            [&_.ant-modal-content>.ant-modal-footer]:pt-4
            [&_.ant-modal-content>.ant-modal-footer]:pb-5
          `
          : '',

        rootClassName,
      )}
      {...restProps}
    >
      {divider ? (
        <div>
          <BaseDivider className='m-0' />
          <div className='px-6 py-3'>{children}</div>
          <BaseDivider className='m-0' />
        </div>
      ) : (
        children
      )}
    </Modal>
  )
}
