import { Typography } from 'antd'
import { type TextProps } from 'antd/es/typography/Text'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

const { Text } = Typography

export interface BaseTextProps extends TypographyProps<any>, TextProps, PropsWithStyleCss {}

export default forwardRef(function BaseText(props: BaseTextProps, ref: Ref<HTMLElement> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Text
      ref={ref}
      className={twMerge(
        `
          mb-0
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
