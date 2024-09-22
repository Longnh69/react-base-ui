import { Badge, type BadgeProps } from 'antd'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { twMerge } from 'tailwind-merge'

export interface BaseBadgeProps extends BadgeProps, PropsWithStyleCss {
  facet?: 'primary' | 'info' | 'succeeded' | 'failed' | 'default'
}

export default function BaseBadge(props: BaseBadgeProps) {
  const { className, facet, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  if (facet) {
    switch (facet) {
      case 'primary': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(37 99 235)' }}
            className={twMerge(className, dynamicClassName)}
            {...restProps}
          />
        )
      }
      case 'info': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(8 145 178)' }}
            className={twMerge(className, dynamicClassName)}
            {...restProps}
          />
        )
      }
      case 'succeeded': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(22 163 74)' }}
            className={twMerge(className, dynamicClassName)}
            {...restProps}
          />
        )
      }
      case 'failed': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(239 68 68)' }}
            className={twMerge(className, dynamicClassName)}
            {...restProps}
          />
        )
      }
      case 'default': {
        return (
          <Badge
            style={{ backgroundColor: 'transparent', color: 'rgb(75 85 99)' }}
            className={twMerge(className, dynamicClassName)}
            {...restProps}
          />
        )
      }
      default: {
        break
      }
    }
  }

  return (
    <Badge
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
