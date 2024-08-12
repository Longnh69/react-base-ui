import { NO_IMAGE_DEFAULT } from '../../constants/image.constant'
import { EyeOutlined } from '@ant-design/icons'
import { Image, type ImageProps } from 'antd'
import _ from 'lodash'

export interface BaseImageProps extends ImageProps {}

export default function BaseImage(props: BaseImageProps) {
  const { preview, ...restProps } = props

  return (
    <Image
      preview={
        _.isBoolean(preview)
          ? preview
          : {
              mask: <EyeOutlined />,
              ...preview,
            }
      }
      loading='lazy'
      fallback={NO_IMAGE_DEFAULT}
      {...restProps}
    />
  )
}
