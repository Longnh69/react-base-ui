import { Typography } from 'antd'
import { type ParagraphProps } from 'antd/es/typography/Paragraph'
import { type TypographyProps } from 'antd/es/typography/Typography'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseParagraphProps extends TypographyProps<any>, ParagraphProps {}

const { Paragraph } = Typography

export default forwardRef(function BaseParagraph(props: BaseParagraphProps, ref: Ref<HTMLElement> | null) {
  const { className, ...restProps } = props

  return (
    <Paragraph
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
