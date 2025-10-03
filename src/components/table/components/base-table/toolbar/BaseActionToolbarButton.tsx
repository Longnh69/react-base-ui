import { ButtonProps } from 'antd'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import BaseButton from '../../../../button/BaseButton'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'

interface BaseActionToolbarButton extends ButtonProps {
  loading?: boolean
  action: 'refresh' | 'create'
  children?: ReactNode
}

function BaseActionToolbarButton(props: BaseActionToolbarButton) {
  const { action, loading, children } = props
  const { t } = useTranslation()

  switch (action) {
    case 'refresh':
      return (
        <>
          <BaseButton type='dashed' icon={<ReloadOutlined spin={loading} />} {...props}>
            {children ?? t('refresh')}
          </BaseButton>
        </>
      )

    case 'create':
      return (
        <>
          <BaseButton type='primary' icon={<PlusOutlined />} {...props}>
            {children ?? t('create')}
          </BaseButton>
        </>
      )

    default:
      return
  }
}

export default BaseActionToolbarButton
