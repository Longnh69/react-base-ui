import { List, type ListProps } from 'antd'
import { twMerge } from 'tailwind-merge'

interface BaseListProps<T> extends ListProps<T> {}

export default function BaseList<T>(props: BaseListProps<T>) {
  const { className, ...restProps } = props

  return (
    <List
      className={twMerge(
        `
          min-h-72
        `,
        className,
      )}
      {...restProps}
    />
  )
}
