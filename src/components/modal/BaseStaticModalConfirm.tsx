import { Flex } from 'antd'
import _ from 'lodash'
import { MouseEvent, SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../button/BaseButton'
import BaseCircleUploadFailedIcon from '../icon/BaseCircleUploadFailedIcon'
import BaseCircleUploadInfoIcon from '../icon/BaseCircleUploadInfoIcon'
import BaseCircleUploadSuccessIcon from '../icon/BaseCircleUploadSuccessIcon'
import BaseModal, { type BaseModalProps } from './BaseModal'
import useBaseStaticModalConfirmStore from './hooks/useBaseStaticModalConfirmStore'

export interface BaseStaticModalConfirmProps extends BaseModalProps {
  status?: 'info' | 'error' | 'success'
}

export default function BaseStaticModalConfirm(props: BaseStaticModalConfirmProps) {
  const { className, children: propsChildren, onClose, onCancel, onOk, ...restProps } = props
  const { props: modalProps, setOpen } = useBaseStaticModalConfirmStore()
  const { status, open, cancelText, okText, children: modalPropsChildren, ...restModalProps } = modalProps
  const { t } = useTranslation()

  const handleClose = (event: SyntheticEvent) => {
    onClose?.(event)
    modalProps?.onClose?.(event)
    setOpen(false)
  }

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    onCancel?.(event)
    modalProps?.onCancel?.(event)
    setOpen(false)
  }

  const handleOk = (event: MouseEvent<HTMLButtonElement>) => {
    onOk?.(event)
    modalProps?.onOk?.(event)
  }

  return (
    <BaseModal
      className={twMerge(
        `
          
        `,
        className,
      )}
      open={open}
      width={400}
      centered
      divider={false}
      footer={
        <Flex className='justify-between gap-2'>
          <BaseButton type='default' className='w-full border-none bg-light-f2f5f8' onClick={handleCancel}>
            {cancelText ? cancelText : t('return', { defaultValue: 'Quay lại' })}
          </BaseButton>
          <BaseButton type='primary' danger={_.eq(status, 'error')} className='w-full' onClick={handleOk}>
            {okText ? okText : t('delete', { defaultValue: 'Xóa' })}
          </BaseButton>
        </Flex>
      }
      onClose={handleClose}
      onCancel={handleCancel}
      onOk={handleOk}
      {...{ ...restProps, ...restModalProps }}
    >
      <Flex className='flex-col items-center justify-center gap-4'>
        {status === 'error' && <BaseCircleUploadFailedIcon className='h-[72px] w-[72px]' />}
        {status === 'info' && <BaseCircleUploadInfoIcon className='h-[72px] w-[72px]' />}
        {status === 'success' && <BaseCircleUploadSuccessIcon className='h-[72px] w-[72px] text-blue-366ae2' />}
        {propsChildren}
        {modalPropsChildren}
      </Flex>
    </BaseModal>
  )
}
