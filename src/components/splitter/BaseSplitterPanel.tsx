import { Splitter } from 'antd'
import { PanelProps } from 'antd/es/splitter/interface'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

const { Panel } = Splitter

export interface BaseSplitterPanelProps extends PanelProps, PropsWithChildren, PropsWithStyleCss {}

export default function BaseSplitterPanel(props: BaseSplitterPanelProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Panel
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
