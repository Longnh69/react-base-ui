import { Typography } from 'antd'
import { type TitleProps } from 'antd/es/typography/Title'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseTitleProps extends TypographyProps<any>, TitleProps {}

const { Title } = Typography

export default forwardRef(function BaseTitle(props: BaseTitleProps, ref: Ref<HTMLElement> | null) {
  const { className, ...restProps } = props

  return (
    <Title
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      {...restProps}
    />
  )
})
