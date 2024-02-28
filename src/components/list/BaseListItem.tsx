import { List } from 'antd'
import { type ListItemProps } from 'antd/es/list'
import { twMerge } from 'tailwind-merge'

interface BaseListItemProps extends ListItemProps {}

export default function BaseListItem(props: BaseListItemProps) {
  const { className, ...restProps } = props

  return (
    <List.Item
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
