import { List } from 'antd'
import { type ListItemMetaProps } from 'antd/lib/list'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseListItemMetaProps extends ListItemMetaProps, PropsWithStyleCss {}

export default function BaseListItemMeta(props: BaseListItemMetaProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <List.Item.Meta
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
