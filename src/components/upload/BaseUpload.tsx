import { Upload, type UploadProps } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseUploadProps extends UploadProps, PropsWithStyleCss {}

export default forwardRef(function BaseUpload(props: BaseUploadProps, ref: Ref<UploadRef<any>>) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Upload
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
