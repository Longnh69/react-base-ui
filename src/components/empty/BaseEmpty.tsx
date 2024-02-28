import { Empty, Typography, type EmptyProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

type Variant = 'missing'

interface BaseEmptyProps extends EmptyProps {
  variant?: Variant
}

export default function BaseEmpty(props: BaseEmptyProps) {
  const { className, description, variant, ...restProps } = props
  const { t } = useTranslation()

  return (
    <Empty
      className={twMerge(
        `
          py-8
        `,
        className,
      )}
      description={description ?? <Typography className='text-dark-8 select-none'>{t('no_data')}</Typography>}
      {...restProps}
    />
  )
}
