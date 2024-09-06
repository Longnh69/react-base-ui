import { Collapse, type CollapseProps } from 'antd'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'
import BaseKeyboardArrowRightIcon from '../icon/BaseKeyboardArrowRightIcon'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type BaseCollapseItem = Required<CollapseProps>['items'][number]

export type BaseCollapseItems = Required<CollapseProps>['items']

export interface BaseCollapseProps extends CollapseProps {
  spacingX?: boolean
  spacingY?: boolean
}

export default forwardRef(function BaseCollapse(props: BaseCollapseProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, spacingX = true, spacingY = true, ...restProps } = props
  console.log(spacingX)
  return (
    <Collapse
      ref={ref}
      className={twMerge(
        `
           
        `,
        !spacingX &&
          `
            [&_.ant-collapse-content-box]:px-0
            [&_.ant-collapse-header]:px-0
          `,
        !spacingY &&
          `
            [&_.ant-collapse-content-box]:py-0
            [&_.ant-collapse-header]:py-0
          `,
        className,
      )}
      expandIcon={(panelProps) => {
        const { isActive } = panelProps

        if (isActive) {
          return <BaseKeyboardArrowDownIcon />
        }

        return <BaseKeyboardArrowRightIcon />
      }}
      {...restProps}
    />
  )
})
