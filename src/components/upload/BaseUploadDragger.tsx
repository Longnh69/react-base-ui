import { Upload } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import { BaseUploadProps } from './BaseUpload'
import BaseUploadDraggerCustomFacet from './BaseUploadDraggerCustomFacet'

const { Dragger } = Upload

export interface BaseUploadDraggerProps extends BaseUploadProps {
  facet?: 'custom' | 'default'
}

export default forwardRef(function BaseUploadDragger(props: BaseUploadDraggerProps, ref: Ref<UploadRef<any>>) {
  const { className, facet, ...restProps } = props

  switch (facet) {
    case 'custom': {
      return (
        <BaseUploadDraggerCustomFacet
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
