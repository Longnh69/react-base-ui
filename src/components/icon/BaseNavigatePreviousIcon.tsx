import BaseIcon, { type BaseIconProps } from './BaseIcon'

interface BaseNavigatePreviousIconProps extends BaseIconProps {}

export default function BaseNavigatePreviousIcon(props: BaseNavigatePreviousIconProps) {
  return (
    <BaseIcon
      component={() => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 40' fill='currentColor'>
          <path d='M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z' />
        </svg>
      )}
      {...props}
    />
  )
}
