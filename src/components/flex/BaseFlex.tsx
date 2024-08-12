import { Flex, FlexProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export interface BaseFlexProps extends FlexProps {}

export default function BaseFlex(props: BaseFlexProps) {
  const { className, ...restProps } = props

  return (
    <Flex
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
