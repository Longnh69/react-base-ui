import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'
import BaseTabs, { BaseTabsProps } from './BaseTabs'

export interface BaseTabsRoundedFacetProps extends Omit<BaseTabsProps, 'facet'> {}

export default function BaseTabsRoundedFacet(props: BaseTabsRoundedFacetProps) {
  const id = uuidv4()
  const { className, ...restProps } = props

  return (
    <BaseTabs
      className={twMerge(
        ` 
          tabs-${id}
          [&_.ant-tabs-ink-bar]:hidden
          [&_.ant-tabs-nav:before]:border-none
          [&_.ant-tabs-tab.ant-tabs-tab-active]:bg-primary
          [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:text-white
          [&_.ant-tabs-tab]:rounded-full
          [&_.ant-tabs-tab]:bg-light-532
          [&_.ant-tabs-tab]:px-4
          [&_.ant-tabs-tab]:py-1
          [&_.ant-tabs-tab]:text-dark-60
          [&_.ant-tabs-tab_.ant-tabs-tab-btn]:text-dark-60
        `,
        className,
      )}
      {...restProps}
    />
  )
}
