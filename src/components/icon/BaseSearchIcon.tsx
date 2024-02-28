import Icon, { SearchOutlined } from '@ant-design/icons'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'

interface SearchIconProps extends Partial<CustomIconComponentProps> {
  isActivated?: boolean
}

export default function BaseSearchIcon(props: SearchIconProps) {
  const { className, isActivated, ...restProps } = props

  return (
    <Icon
      className={twMerge(
        `
          h-4 w-4
        `,
        isActivated && 'text-primary',
        className,
      )}
      {...restProps}
      component={() => <SearchOutlined />}
    />
  )
}
