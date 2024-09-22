import Icon from '@ant-design/icons'
import { IconComponentProps, type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseIconProps extends Partial<CustomIconComponentProps>, IconComponentProps, PropsWithStyleCss {}

export default function BaseIcon(props: BaseIconProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Icon
      className={twMerge(
        `
          h-4 w-4
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
