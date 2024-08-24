import Icon from '@ant-design/icons'
import { IconComponentProps, type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'

export interface BaseIconProps extends Partial<CustomIconComponentProps>, IconComponentProps {}

export default function BaseIcon(props: BaseIconProps) {
  const { className, ...restProps } = props

  return (
    <Icon
      className={twMerge(
        `
          h-4 w-4
        `,
        className,
      )}
      {...restProps}
    />
  )
}
