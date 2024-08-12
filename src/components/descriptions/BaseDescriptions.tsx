import { Descriptions, DescriptionsProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseDescriptionsProps extends DescriptionsProps {}

export default function BaseDescriptions(props: BaseDescriptionsProps) {
  const { className, ...restProps } = props

  return (
    <Descriptions
      className={twMerge(
        `
       
        `,
        className,
      )}
      {...restProps}
    />
  )
}
