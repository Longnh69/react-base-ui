import { List } from 'antd'
import { type ListItemMetaProps } from 'antd/lib/list'
import { twMerge } from 'tailwind-merge'

export interface BaseListItemMetaProps extends ListItemMetaProps {}

export default function BaseListItemMeta(props: BaseListItemMetaProps) {
  const { className, ...restProps } = props

  return (
    <List.Item.Meta
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
