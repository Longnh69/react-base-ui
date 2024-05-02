import { useTranslation } from 'react-i18next'
import BaseButton, { type BaseButtonProps } from './BaseButton'
import BaseEditIcon from '@/components/icon/BaseEditIcon'
import { twMerge } from 'tailwind-merge'
import { CloseCircleOutlined, SaveOutlined } from '@ant-design/icons'

type Action = 'edit' | 'cancel' | 'save' | 'delete' | 'add' | 'view' | 'move'

interface BaseActionButtonProps extends BaseButtonProps {
  action: Action
}

export default function BaseActionButton(props: BaseActionButtonProps) {
  const { action, className, ...restProps } = props
  const { t } = useTranslation()

  switch (action) {
    case 'edit': {
      return (
        <BaseButton
          type='link'
          size='small'
          title={t('edit')}
          icon={<BaseEditIcon />}
          className={twMerge('text-primary', className)}
          {...restProps}
        />
      )
    }
    case 'cancel': {
      return (
        <BaseButton
          type='link'
          size='small'
          title={t('cancel')}
          icon={<CloseCircleOutlined />}
          className={twMerge('text-primary', className)}
          {...restProps}
        />
      )
    }

    case 'save': {
      return (
        <BaseButton
          type='link'
          size='small'
          title={t('save')}
          icon={<SaveOutlined />}
          className={twMerge('text-primary', className)}
          {...restProps}
        />
      )
    }

    default:
      break
  }

  return <BaseButton />
}
