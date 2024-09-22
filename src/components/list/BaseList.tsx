import { List, type ListProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseListProps<T> extends ListProps<T>, PropsWithStyleCss {
  heightAuto?: boolean
}

export default function BaseList<T>(props: BaseListProps<T>) {
  const { heightAuto, className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <List
      className={twMerge(
        `
          
        `,
        heightAuto && 'min-h-72',
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
