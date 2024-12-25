import { ReloadOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import BaseButton from '../button/BaseButton'
import BaseTitle from '../typography/BaseTitle'
import BaseTypography from '../typography/BaseTypography'

export interface BaseErrorFallbackProps {
  error: any
  resetErrorBoundary: any
}

export default function BaseErrorFallback(_props: BaseErrorFallbackProps) {
  const { t } = useTranslation()

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-white dark:bg-dark-18181b'>
      <div className='flex flex-col gap-8'>
        <div>
          <BaseTitle className='text-dark-5f5f5f'>Oops!</BaseTitle>
          <BaseTypography className='text-dark-8c8c8c'>
            {t('message.error_boundary', {
              defaultValue: 'Có lỗi phát sinh hoặc hệ thống đã được cập nhập phiên bản mới, vui lòng thử lại.',
            })}
          </BaseTypography>
        </div>
        <div>
          <BaseButton
            type='primary'
            icon={<ReloadOutlined />}
            onClick={() => {
              window.location.reload()
            }}
          >
            {t('retry')}
          </BaseButton>
        </div>
      </div>
    </div>
  )
}
