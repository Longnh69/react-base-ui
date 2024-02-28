import { Badge, type BadgeProps } from 'antd'

interface BaseBadgeProps extends BadgeProps {
  variant?: 'primary' | 'info' | 'succeeded' | 'failed' | 'default'
}

export default function BaseBadge(props: BaseBadgeProps) {
  const { className, variant, ...restProps } = props

  if (variant) {
    switch (variant) {
      case 'primary': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(37 99 235)' }}
            className={className}
            {...restProps}
          />
        )
      }
      case 'info': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(8 145 178)' }}
            className={className}
            {...restProps}
          />
        )
      }
      case 'succeeded': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(22 163 74)' }}
            className={className}
            {...restProps}
          />
        )
      }
      case 'failed': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(239 68 68)' }}
            className={className}
            {...restProps}
          />
        )
      }
      case 'default': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(75 85 99)' }}
            className={className}
            {...restProps}
          />
        )
      }
      default: {
        break
      }
    }
  }

  return <Badge className={className} {...restProps} />
}
