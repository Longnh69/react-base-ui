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
    <div className='dark:bg-dark-18181b flex h-dvh w-full items-center justify-center bg-white'>
      <div className='flex flex-col gap-8'>
        <div>
          <BaseTitle className='text-dark-5f5f5f'>Oops!</BaseTitle>
          <BaseTypography className='text-dark-8c8c8c'>Có lỗi phát sinh, vui lòng thử lại</BaseTypography>
        </div>
        <div>
          <BaseButton
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
