import { useTranslation } from 'react-i18next'
import BaseButton from '@/components/button/BaseButton'
import BaseTitle from '@/components/typography/BaseTitle'
import BaseTypography from '@/components/typography/BaseTypography'

interface BaseErrorFallbackProps {
  error: any
  resetErrorBoundary: any
}

export default function BaseErrorFallback(_props: BaseErrorFallbackProps) {
  const { t } = useTranslation()

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-white dark:bg-dark-888'>
      <div className='flex flex-col gap-8'>
        <div>
          <BaseTitle className='text-dark-113'>Oops!</BaseTitle>
          <BaseTypography className='text-dark-104'>Có lỗi phát sinh, vui lòng thử lại</BaseTypography>
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
