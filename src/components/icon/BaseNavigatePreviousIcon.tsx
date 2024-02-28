import Icon from '@ant-design/icons'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'

export default function BaseNavigatePreviousIcon(props: Partial<CustomIconComponentProps>) {
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 40' fill='currentColor'>
          <path d='M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z' />
        </svg>
      )}
    />
  )
}
