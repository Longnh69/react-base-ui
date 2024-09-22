import { Typography } from 'antd'
import { type ParagraphProps } from 'antd/es/typography/Paragraph'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

const { Paragraph } = Typography

export interface BaseParagraphProps extends TypographyProps<any>, ParagraphProps, PropsWithStyleCss {}

export default forwardRef(function BaseParagraph(props: BaseParagraphProps, ref: Ref<HTMLElement> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Paragraph
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
