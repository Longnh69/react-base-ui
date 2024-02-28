import { Tabs, type TabsProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export type BaseTabsItem = Required<TabsProps>['items'][number]

export type BaseTabsItems = Required<TabsProps>['items']

export interface BaseTabsProps extends TabsProps {}

export default function BaseTabs(props: BaseTabsProps) {
  const { className, ...restProps } = props

  return (
    <Tabs
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
}
