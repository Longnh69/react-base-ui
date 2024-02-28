import { Modal, type ModalProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseModalProps extends ModalProps {}

export default function BaseModal(props: BaseModalProps) {
  const { className, rootClassName, ...restProps } = props

  return (
    <Modal
      className={twMerge(
        `

        `,
        className,
      )}
      rootClassName={twMerge(
        `

        `,

        rootClassName,
      )}
      {...restProps}
    />
  )
}
