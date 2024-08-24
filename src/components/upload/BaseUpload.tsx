import { Upload, type UploadProps } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BaseUploadProps extends UploadProps {}

export default forwardRef(function BaseUpload(props: BaseUploadProps, ref: Ref<UploadRef<any>>) {
  const { className, ...restProps } = props

  return (
    <Upload
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
