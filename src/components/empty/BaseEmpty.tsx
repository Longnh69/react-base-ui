import { Empty, Typography, type EmptyProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseEmptyProps extends EmptyProps, PropsWithStyleCss {}

export default function BaseEmpty(props: BaseEmptyProps) {
  const { className, description, styleCss, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <Empty
      className={twMerge(
        `
          py-8
        `,
        className,
        dynamicClassName,
      )}
      description={description ?? <Typography className='select-none text-dark-80'>{t('no_data')}</Typography>}
      {...restProps}
    />
  )
}
