import { Collapse, type CollapseProps } from 'antd'
import { forwardRef, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'
import BaseKeyboardArrowRightIcon from '../icon/BaseKeyboardArrowRightIcon'

export type BaseCollapseItem = Required<CollapseProps>['items'][number]

export type BaseCollapseItems = Required<CollapseProps>['items']

export interface BaseCollapseProps extends CollapseProps, PropsWithStyleCss {
  spacingX?: boolean
  spacingY?: boolean
}

export default forwardRef(function BaseCollapse(props: BaseCollapseProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  const { className, spacingX = true, spacingY = true, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

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
        dynamicClassName,
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
