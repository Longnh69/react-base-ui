import BaseIcon, { type BaseIconProps } from './BaseIcon'

interface BaseTimelineProcessSuccessIcon extends BaseIconProps {}

export default function BaseTimelineProcessSuccessIcon(props: BaseTimelineProcessSuccessIcon) {
  return (
    <BaseIcon
      component={() => (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9923 7.3502 18.9363 4.81113 17.0626 2.93743C15.1889 1.06373 12.6498 0.00769496 10 0V0ZM8.33334 14.5117L3.82167 10L5 8.82166L8.33334 12.155L15 5.48833L16.1783 6.66667L8.33334 14.5117Z'
            fill='#39AC6D'
          />
        </svg>
      )}
      {...props}
    />
  )
}
