import { Upload } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import { BaseUploadProps } from './BaseUpload'
import BaseUploadDraggerPrettyFacet from './BaseUploadDraggerPrettyFacet'

const { Dragger } = Upload

export interface BaseUploadDraggerProps extends BaseUploadProps {
  facet?: 'pretty' | 'default'
  maxTextLength?: number
}

export default forwardRef(function BaseUploadDragger(props: BaseUploadDraggerProps, ref: Ref<UploadRef<any>>) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'pretty': {
      return <BaseUploadDraggerPrettyFacet ref={ref} className={className} {...restProps} />
    }

    default: {
      return (
        <Dragger
          ref={ref}
          className={twMerge(
            `

            `,
            className,
          )}
          {...restProps}
        />
      )
    }
  }
})
