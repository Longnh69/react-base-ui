import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons'
import { Flex, UploadFile } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { filesize } from 'filesize'
import _ from 'lodash'
import { forwardRef, useState, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { getBase64 } from '../../utils/file.util'
import BaseButton from '../button/BaseButton'
import BaseCircleUploadIcon from '../icon/BaseCircleUploadIcon'
import BaseImage from '../image/BaseImage'
import BaseText from '../typography/BaseText'
import BaseTitle from '../typography/BaseTitle'
import BaseTypography from '../typography/BaseTypography'
import { type BaseUploadProps } from './BaseUpload'
import BaseUploadDragger, { type BaseUploadDraggerProps } from './BaseUploadDragger'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseUploadDraggerPrettyFacetProps extends Omit<BaseUploadDraggerProps, 'facet'> {
  title?: string
  description?: string
}

export default forwardRef(function BaseUploadDraggerPrettyFacet(
  props: BaseUploadDraggerPrettyFacetProps,
  ref: Ref<UploadRef<any>>,
) {
  const { className, styleCss, fileList, maxTextLength = 50, onChange, title, description, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  const [newFileList, setNewFileList] = useState<UploadFile[]>(fileList || [])

  const handleChange: BaseUploadProps['onChange'] = ({ file, fileList, event }) => {
    const uniqFileList = _.uniqWith(fileList, (firstFile, secondFile) => {
      return (
        _.eq(firstFile.name, secondFile.name) &&
        _.eq(firstFile.lastModified, secondFile.lastModified) &&
        _.eq(firstFile.size, secondFile.size) &&
        _.eq(firstFile.type, secondFile.type)
      )
    })

    setNewFileList(uniqFileList)
    onChange?.({ file, fileList: uniqFileList, event })
  }

  const handlePreview: BaseUploadProps['onPreview'] = async (file) => {
    let src = file.url as string

    if (!src && file.originFileObj) {
      src = await getBase64(file.originFileObj)
    }

    const image = new Image()
    const imgWindow = window.open(src)

    image.src = src
    imgWindow?.document.write(image.outerHTML)
  }

  const getItemRender: BaseUploadProps['itemRender'] = (_originNode, file, _fileList, actions) => {
    const { name, url, type, size = 0 } = file
    const { download, preview, remove } = actions

    return (
      <Flex className='h-14 w-full items-center justify-between rounded-md border p-2'>
        <Flex className='items-center gap-2'>
          <Flex className='min-w-10 max-w-10'>
            {(() => {
              if (_.startsWith(type, 'image')) {
                return (
                  <BaseImage
                    className='h-10 w-10 object-cover p-1'
                    src={url || URL.createObjectURL(file.originFileObj as Blob)}
                  />
                )
              }

              return (
                <BaseImage
                  className='h-10 w-10 object-cover p-1'
                  src={url || URL.createObjectURL(file.originFileObj as Blob)}
                  preview={{
                    src: file.url,
                    visible: false,
                    onVisibleChange: () => {
                      preview()
                    },
                  }}
                />
              )
            })()}
          </Flex>
          <Flex>
            <BaseTypography
              tooltipProps={
                maxTextLength && _.size(name) > maxTextLength
                  ? {
                      title: name,
                    }
                  : {}
              }
            >
              {maxTextLength && maxTextLength > 6 && _.size(name) > maxTextLength ? (
                <>
                  <BaseText>{_.take(name, _.round(maxTextLength / 2) - 2)}</BaseText>
                  <BaseText>...</BaseText>
                  <BaseText>{_.takeRight(name, _.round(maxTextLength / 2) - 2)}</BaseText>
                </>
              ) : (
                <BaseText>{name}</BaseText>
              )}
              <BaseText> </BaseText>
              <BaseText className='text-xs italic text-dark-8c8c8c'>({filesize(size, { standard: 'jedec' })})</BaseText>
            </BaseTypography>
          </Flex>
        </Flex>
        <Flex className='flex gap-2'>
          <BaseButton
            type='text'
            icon={<DownloadOutlined className='text-green-039732' />}
            title={t('download', { defaultValue: 'Tải xuống' })}
            onClick={download}
          />
          <BaseButton
            type='text'
            icon={<DeleteOutlined className='text-orange-d46b08' />}
            title={t('remove_attachment', { defaultValue: 'Gỡ xuống tập tin' })}
            onClick={remove}
          />
        </Flex>
      </Flex>
    )
  }

  return (
    <BaseUploadDragger
      ref={ref}
      className={twMerge(
        `
          [&_.ant-upload-list]:flex
          [&_.ant-upload-list]:flex-col
          [&_.ant-upload-list]:gap-2
        `,
        className,
        dynamicClassName,
      )}
      itemRender={getItemRender}
      beforeUpload={() => false}
      onChange={handleChange}
      onPreview={handlePreview}
      fileList={newFileList}
      {...restProps}
    >
      <div className='flex justify-between p-4'>
        <div className='flex flex-nowrap items-center gap-4'>
          <BaseCircleUploadIcon className='flex h-14 w-14' />
          <BaseTypography className='flex flex-col items-start justify-center'>
            <BaseTitle className='text-dark m-0 text-base font-semibold'>
              {title || 'Nhấp hoặc kéo tệp vào đây để tải lên'}
            </BaseTitle>
            <BaseText className='text-justify text-xs font-normal  text-dark-60'>
              {description || 'CSV, XLS hoặc XLSX, kích thước tệp nhỏ hơn 20 MB.'}
            </BaseText>
            <div className='flex gap-4'></div>
          </BaseTypography>
        </div>
        <div className='flex items-center'>
          <BaseButton className='text-sm font-semibold'>Chọn tệp</BaseButton>
        </div>
      </div>
    </BaseUploadDragger>
  )
})
