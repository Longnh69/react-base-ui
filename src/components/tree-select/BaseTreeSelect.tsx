import { TreeSelect, type TreeSelectProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseTreeSelectProps extends TreeSelectProps, PropsWithStyleCss {}

export default function BaseTreeSelect(props: BaseTreeSelectProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <TreeSelect
      allowClear
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
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
