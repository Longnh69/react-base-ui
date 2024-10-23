import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../button/BaseButton'
import BaseFlex from '../flex/BaseFlex'
import BaseCircleUploadInfoIcon from '../icon/BaseCircleUploadInfoIcon'
import BaseModal, { type BaseModalProps } from './BaseModal'

export interface BaseModalConfirmInfoFacetProps extends Omit<BaseModalProps, 'facet'> {}

export default function BaseModalConfirmInfoFacet(props: BaseModalConfirmInfoFacetProps) {
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
        <BaseFlex className='justify-between gap-2'>
          <BaseButton type='default' className='w-full border-none bg-light-f2f5f8' onClick={onCancel}>
            {t('return', { defaultValue: 'Quay lại' })}
          </BaseButton>
          <BaseButton type='primary' className='w-full' onClick={onOk}>
            {t('confirm', { defaultValue: 'Xác nhận' })}
          </BaseButton>
        </BaseFlex>
      }
      onCancel={onCancel}
      onOk={onOk}
      {...restProps}
    >
      <BaseFlex className='flex-col items-center justify-center gap-4 py-2'>
        <BaseCircleUploadInfoIcon className='h-[72px] w-[72px]' />
        {children}
      </BaseFlex>
    </BaseModal>
  )
}
