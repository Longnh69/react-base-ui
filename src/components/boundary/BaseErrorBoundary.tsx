import { EEnvironment } from '@/enums/environment.enum'
import useDirect from '@/hooks/useDirect'
import { Flex } from 'antd'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router-dom'
import BaseButton from '../button/BaseButton'
import BaseParagraph from '../typography/BaseParagraph'
import BaseTitle from '../typography/BaseTitle'
import BaseTypography from '../typography/BaseTypography'

export default function BaseErrorBoundary() {
  const direct = useDirect()
  const error = useRouteError()
  const { stack, message } = (error || {}) as Error
  const { t } = useTranslation()

  return (
    <Flex className='h-dvh w-full items-center justify-center bg-white dark:bg-dark-888'>
      <Flex gap={32}>
        {_.includes([EEnvironment.Development], __APP_ENV__) && (
          <Flex>
            <Flex vertical className='min-h-80 max-w-2xl rounded border border-light-999 p-2'>
              <BaseParagraph className='whitespace-pre-line text-red-600'>{message}</BaseParagraph>
              <BaseParagraph className='whitespace-pre-line text-dark-108'>{stack}</BaseParagraph>
            </Flex>
          </Flex>
        )}
        <Flex vertical gap={32}>
          <div>
            <BaseTitle className='text-dark-113'>Oops!</BaseTitle>
            <BaseTypography className='text-dark-104'>Có lỗi phát sinh, vui lòng thử lại</BaseTypography>
          </div>
          <div></div>
          <div>
            <BaseButton
              onClick={() => {
                direct(0)
              }}
            >
              {t('retry')}
            </BaseButton>
          </div>
        </Flex>
      </Flex>
    </Flex>
  )
}
