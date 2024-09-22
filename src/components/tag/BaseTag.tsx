import { CloseOutlined } from '@ant-design/icons'
import { Tag, type TagProps } from 'antd'
import { type Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseTagProps extends TagProps, PropsWithStyleCss {
  spaceY?: boolean
}

export default forwardRef(function BaseTag(props: BaseTagProps, ref: Ref<HTMLElement> | null) {
  const { spaceY, className, color, closable, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Tag
      ref={ref}
      className={twMerge(
        `
          
        `,
        spaceY && 'my-0.5',
        className,
        dynamicClassName,
      )}
      color={color}
      closable={closable}
      closeIcon={closable ? <CloseOutlined style={{ color, opacity: 50 }} /> : null}
      {...restProps}
    />
  )
})
