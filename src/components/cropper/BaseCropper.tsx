import { GetProps } from 'antd'
import Cropper from 'react-easy-crop'
import { twMerge } from 'tailwind-merge'
import { RequiredFields } from '../../helpers/type.helper'

export type BaseCropperProps = RequiredFields<Partial<GetProps<typeof Cropper>>, 'image' | 'crop' | 'onCropChange'>

export default function BaseCropper(props: BaseCropperProps) {
  const { classes, ...restProps } = props
  const { containerClassName, cropAreaClassName, mediaClassName } = classes || {}

  return (
    <Cropper
      classes={{
        containerClassName: twMerge(
          `
            
            `,
          containerClassName,
        ),
        cropAreaClassName: twMerge(
          `
          
            `,
          cropAreaClassName,
        ),
        mediaClassName: twMerge(
          `
          
            `,
          mediaClassName,
        ),
      }}
      {...restProps}
    />
  )
}
