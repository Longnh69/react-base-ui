import { Tabs, type TabsProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import BaseTabsRoundedFacet from './BaseTabsRoundedFacet'

export type BaseTabsItem = Required<TabsProps>['items'][number]

export type BaseTabsItems = Required<TabsProps>['items']

export interface BaseTabsProps extends TabsProps, PropsWithStyleCss {
  facet?: 'rounded' | 'default'
}

export default function BaseTabs(props: BaseTabsProps) {
  const { className, facet, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

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
            dynamicClassName,
          )}
          {...restProps}
        />
      )
    }
  }
}
