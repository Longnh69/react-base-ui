import { type UploadRef } from 'antd/es/upload/Upload'
import BaseButton from 'components/button/BaseButton'
import BaseText from 'components/typography/BaseText'
import BaseTitle from 'components/typography/BaseTitle'
import BaseTypography from 'components/typography/BaseTypography'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
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
      {...restProps}
    >
      <div className='flex justify-between px-9 py-4'>
        <div className='flex flex-nowrap items-center gap-4'>
          {/* <CircleFileSuccessIcon className='h14 flex w-14' /> */}
          <BaseTypography className='flex flex-col items-start justify-center'>
            <BaseTitle className='text-dark m-0 text-base font-semibold'>
              Nhấp hoặc kéo tệp vào đây để tải lên
            </BaseTitle>
            <BaseText className='text-dark-60 text-xs font-normal'>
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
