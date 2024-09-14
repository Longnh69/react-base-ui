import BaseIcon, { type BaseIconProps } from './BaseIcon'

interface BaseTimelineProcessDefaultIcon extends BaseIconProps {}

export default function BaseTimelineProcessDefaultIcon(props: BaseTimelineProcessDefaultIcon) {
  return (
    <BaseIcon
      component={() => (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='24' height='24' rx='12' fill='#F2F5F8' />
        </svg>
      )}
      {...props}
    />
  )
}
