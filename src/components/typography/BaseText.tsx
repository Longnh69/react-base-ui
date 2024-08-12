import { Typography } from 'antd'
import { type TextProps } from 'antd/es/typography/Text'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTextProps extends TypographyProps<any>, TextProps {}

const { Text } = Typography

export default forwardRef(function BaseText(props: BaseTextProps, ref: Ref<HTMLElement> | null) {
  const { className, ...restProps } = props

  return (
    <Text
      ref={ref}
      className={twMerge(
        `
          mb-0
        `,
        className,
      )}
      {...restProps}
    />
  )
})
