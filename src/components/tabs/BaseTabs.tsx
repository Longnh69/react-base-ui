import { Tabs, type TabsProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseTabsRoundedFacet from './BaseTabsRoundedFacet'

export type BaseTabsItem = Required<TabsProps>['items'][number]

export type BaseTabsItems = Required<TabsProps>['items']

export interface BaseTabsProps extends TabsProps {
  facet?: 'rounded' | 'default'
}

export default function BaseTabs(props: BaseTabsProps) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'rounded': {
      return <BaseTabsRoundedFacet className={className} {...restProps} />
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
