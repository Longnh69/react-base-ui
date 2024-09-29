import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../button/BaseButton'
import BaseCircleUploadFailedIcon from '../icon/BaseCircleUploadFailedIcon'
import BaseModal, { type BaseModalProps } from './BaseModal'

export interface BaseModalConfirmRemoveFacetProps extends Omit<BaseModalProps, 'facet'> {}

export default function BaseModalConfirmRemoveFacet(props: BaseModalConfirmRemoveFacetProps) {
  const { className, title, children, onCancel, onOk, ...restProps } = props

  const { t } = useTranslation()

  return (
    <BaseModal
      className={twMerge(
        `
          
        `,
        className,
      )}
      width={400}
      divider={false}
      footer={
        <Flex className='justify-between gap-2'>
          <BaseButton type='default' className='w-full border-none bg-light-f2f5f8' onClick={onCancel}>
            {t('return', { defaultValue: 'Quay lại' })}
          </BaseButton>
          <BaseButton type='primary' danger className='w-full' onClick={onOk}>
            {t('delete', { defaultValue: 'Xóa' })}
          </BaseButton>
        </Flex>
      }
      onCancel={onCancel}
      onOk={onOk}
      {...restProps}
    >
      <Flex className='flex-col items-center justify-center gap-4'>
        <BaseCircleUploadFailedIcon className='h-[72px] w-[72px]' />
        {children}
      </Flex>
    </BaseModal>
  )
}
