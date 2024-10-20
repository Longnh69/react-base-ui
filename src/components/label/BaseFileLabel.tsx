import _ from 'lodash'
import { ReactNode } from 'react'
import BaseFlex from '../flex/BaseFlex'
import BaseText from '../typography/BaseText'
import BaseTypography from '../typography/BaseTypography'
import BaseFileIcon from '../icon/BaseFileIcon'
import BaseExcelIcon from '../icon/BaseExcelIcon'
import BaseZipIcon from '../icon/BaseZipIcon'
import { filesize } from 'filesize'

interface BaseFileLabelProps {
  name: string
  size: number
  icon?: ReactNode | boolean
  max?: number
}

export default function BaseFileLabel(props: BaseFileLabelProps) {
  const { name, size, icon = true, max } = props
  const extension = name.split('.').pop()

  let fileIcon = <BaseFileIcon />
  let textClassName = ''

  switch (extension) {
    case 'csv':
    case 'xls':
    case 'xlsx': {
      fileIcon = <BaseExcelIcon />
      textClassName = 'text-green-600'
      break
    }
    case 'zip': {
      fileIcon = <BaseZipIcon />
      textClassName = 'text-gray-1'
      break
    }

    default:
      break
  }

  return (
    <BaseFlex>
      {icon && (_.isBoolean(icon) ? fileIcon : icon)}
      <BaseTypography
        tooltipProps={
          max && _.size(name) > max
            ? {
                title: name,
              }
            : {}
        }
      >
        {max && max > 6 && _.size(name) > max ? (
          <>
            <BaseText className={textClassName}>{_.take(name, _.round(max / 2) - 2)}</BaseText>
            <BaseText className={textClassName}>...</BaseText>
            <BaseText className={textClassName}>{_.takeRight(name, _.round(max / 2) - 2)}</BaseText>
          </>
        ) : (
          <BaseText className={textClassName}>{name}</BaseText>
        )}
        <BaseText> </BaseText>
        <BaseText className='text-xs italic text-dark-b3b3b3'>({filesize(size, { standard: 'jedec' })})</BaseText>
      </BaseTypography>
    </BaseFlex>
  )
}
