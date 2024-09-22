import { Typography } from 'antd'
import { type TitleProps } from 'antd/es/typography/Title'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

const { Title } = Typography

export interface BaseTitleProps extends TypographyProps<any>, TitleProps, PropsWithStyleCss {}

export default forwardRef(function BaseTitle(props: BaseTitleProps, ref: Ref<HTMLElement> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Title
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
