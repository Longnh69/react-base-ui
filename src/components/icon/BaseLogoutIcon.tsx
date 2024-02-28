import Icon from '@ant-design/icons'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import { twMerge } from 'tailwind-merge'

export default function BaseLogoutIcon(props: Partial<CustomIconComponentProps>) {
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
        <svg width='1rem' height='1rem' viewBox='0 96 960 960' xmlns='http://www.w3.org/2000/svg'>
          <path d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z' />
        </svg>
      )}
    />
  )
}
