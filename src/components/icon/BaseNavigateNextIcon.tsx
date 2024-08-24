import BaseIcon, { type BaseIconProps } from './BaseIcon'

interface BaseNavigateNextIconProps extends BaseIconProps {}

export default function BaseNavigateNextIcon(props: BaseNavigateNextIconProps) {
  return (
    <BaseIcon
      component={() => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 40' fill='currentColor'>
          <path d='M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z' />
        </svg>
      )}
      {...props}
    />
  )
}
