import { Splitter, type SplitterProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import { PropsWithChildren } from 'react'

export interface BaseSplitterProps extends SplitterProps, PropsWithChildren, PropsWithStyleCss {}

export default function BaseSplitter(props: BaseSplitterProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Splitter
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
