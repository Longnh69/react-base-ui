import { EyeOutlined } from '@ant-design/icons'
import { Image, type ImageProps } from 'antd'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { NO_IMAGE_DEFAULT } from '../../constants/image.constant'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseImageProps extends ImageProps, PropsWithStyleCss {}

export default function BaseImage(props: BaseImageProps) {
  const { className, styleCss, preview, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Image
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
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
