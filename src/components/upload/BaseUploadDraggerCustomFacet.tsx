import { type UploadRef } from 'antd/es/upload/Upload'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../button/BaseButton'
import BaseCircleUploadIcon from '../icon/BaseCircleUploadIcon'
import BaseText from '../typography/BaseText'
import BaseTitle from '../typography/BaseTitle'
import BaseTypography from '../typography/BaseTypography'
import BaseUploadDragger, { BaseUploadDraggerProps } from './BaseUploadDragger'

export interface BaseUploadDraggerCustomFacetProps extends Omit<BaseUploadDraggerProps, 'facet'> {}

export default forwardRef(function BaseUploadDraggerCustomFacet(
  props: BaseUploadDraggerCustomFacetProps,
  ref: Ref<UploadRef<any>>,
) {
  const { className, ...restProps } = props

  return (
    <BaseUploadDragger
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      beforeUpload={() => {
        return false
      }}
      {...restProps}
    >
      <div className='flex justify-between px-9 py-4'>
        <div className='flex flex-nowrap items-center gap-4'>
          <BaseCircleUploadIcon className='flex h-14 w-14' />
          <BaseTypography className='flex flex-col items-start justify-center'>
            <BaseTitle className='text-dark m-0 text-base font-semibold'>
              Nhấp hoặc kéo tệp vào đây để tải lên
            </BaseTitle>
            <BaseText className='text-xs font-normal text-dark-60'>
              CSV, XLS hoặc XLSX, kích thước tệp nhỏ hơn ...MB.
            </BaseText>
            <div className='flex gap-4'></div>
          </BaseTypography>
        </div>
        <div className='flex items-center'>
          <BaseButton className='text-dark-1 text-sm font-semibold'>Chọn tệp</BaseButton>
        </div>
      </div>
    </BaseUploadDragger>
  )
})
