import { Tabs, type TabsProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseTabsCustomFacet from './BaseTabsCustomFacet'

export type BaseTabsItem = Required<TabsProps>['items'][number]

export type BaseTabsItems = Required<TabsProps>['items']

export interface BaseTabsProps extends TabsProps {
  facet?: 'custom' | 'default'
}

export default function BaseTabs(props: BaseTabsProps) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'custom': {
      return (
        <BaseTabsCustomFacet
          className={twMerge(
            `

            `,
            className,
          )}
          {...restProps}
        />
      )
    }

    default: {
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
  }
}
