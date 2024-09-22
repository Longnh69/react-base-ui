import { Descriptions, DescriptionsProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseDescriptionsProps extends DescriptionsProps, PropsWithStyleCss {}

export default function BaseDescriptions(props: BaseDescriptionsProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Descriptions
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
