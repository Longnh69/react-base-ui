import Icon from '@ant-design/icons'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'

export default function BaseKeyboardArrowLeftIcon(props: Partial<CustomIconComponentProps>) {
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
      component={() => (
        <svg xmlns='http://www.w3.org/2000/svg' height='20px' viewBox='0 -960 960 960' width='20px' fill='currentColor'>
          <path d='M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z' />
        </svg>
      )}
    />
  )
}
