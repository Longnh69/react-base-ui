import { List, type ListProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseListProps<T> extends ListProps<T> {
  heightAuto?: boolean
}

export default function BaseList<T>(props: BaseListProps<T>) {
  const { heightAuto = true, className, ...restProps } = props

  return (
    <List
      className={twMerge(
        `
          
        `,
        heightAuto && 'min-h-72',
        className,
      )}
      {...restProps}
    />
  )
}
