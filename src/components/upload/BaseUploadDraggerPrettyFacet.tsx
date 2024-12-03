import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons'
import { Flex, type UploadFile } from 'antd'
import { type UploadRef } from 'antd/es/upload/Upload'
import { filesize } from 'filesize'
import _ from 'lodash'
import { forwardRef, useState, type Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { getBase64 } from '../../utils/file.util'
import BaseButton from '../button/BaseButton'
import BaseCircleUploadIcon from '../icon/BaseCircleUploadIcon'
import BaseDocumentFileIcon from '../icon/BaseDocumentFileIcon'
import BaseImage from '../image/BaseImage'
import BaseText from '../typography/BaseText'
import BaseTitle from '../typography/BaseTitle'
import BaseTypography from '../typography/BaseTypography'
import { type BaseUploadProps } from './BaseUpload'
import BaseUploadDragger, { type BaseUploadDraggerProps } from './BaseUploadDragger'

export interface BaseUploadDraggerPrettyFacetProps extends Omit<BaseUploadDraggerProps, 'facet'> {
  title?: string
  description?: string
  extraButton?: React.ReactNode
}

export default forwardRef(function BaseUploadDraggerPrettyFacet(
  props: BaseUploadDraggerPrettyFacetProps,
  ref: Ref<UploadRef<any>>,
) {
  const {
    className,
    styleCss,
    fileList,
    maxTextLength = 50,
    onChange,
    title,
    description,
    extraButton,
    ...restProps
  } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  const [newFileList, setNewFileList] = useState<UploadFile[]>(fileList ?? [])

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
    let src: string | undefined = file.url

    if (!src && file.originFileObj) {
      src = await getBase64(file.originFileObj)
    }

    const image = new Image()
    const imgWindow = window.open(src)

    if (src) {
      image.src = src
    }
    imgWindow?.document.write(image.outerHTML)
  }

  // handle dowload file
  const handleDownloadFileByOriginfileOrURL = async (file: UploadFile, url?: string) => {
    try {
      if (url) {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = file.name // Sets the correct file name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(link.href) // Cleanup the object URL
      } else {
        const downloadUrl = URL.createObjectURL(file.originFileObj as Blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error('File download failed:', error)
    }
  }

  const getItemRender: BaseUploadProps['itemRender'] = (_originNode, file, _fileList, actions) => {
    const { name, url, type, size = 0 } = file
    console.log('file::', file)
    const { download, remove } = actions

    return (
      <Flex className='h-14 w-full items-center justify-between rounded-md border p-2'>
        <Flex className='items-center gap-2'>
          <Flex className='min-w-10 max-w-10'>
            {(() => {
              if (_.startsWith(type, 'image')) {
                return (
                  <BaseButton className='overflow-hidden border-none px-0 py-1 shadow-sm'>
                    <BaseImage
                      className='h-8 w-8 object-cover p-1 py-1.5'
                      src={url ?? URL.createObjectURL(file.originFileObj as Blob)}
                    />
                  </BaseButton>
                )
              }

              return (
                <BaseButton
                  // size='lmearge'
                  className='border-none p-0 shadow-sm'
                  onClick={() => {
                    if (url) {
                      handleDownloadFileByOriginfileOrURL(file, url)
                    } else {
                      handleDownloadFileByOriginfileOrURL(file)
                    }
                  }}
                  icon={<BaseDocumentFileIcon className='h-6 w-6 text-gray-500' />}
                ></BaseButton>
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
      onDownload={handleDownloadFileByOriginfileOrURL}
      fileList={newFileList}
      {...restProps}
    >
      <div className='flex justify-between p-4'>
        <div className='flex flex-nowrap items-center gap-4'>
          <BaseCircleUploadIcon className='flex h-14 w-14' />
          <BaseTypography className='flex flex-col items-start justify-center'>
            <BaseTitle className='text-dark m-0 text-base font-semibold'>
              {title ??
                t('click_or_drag_file_here_to_upload', { defaultValue: 'Nhấp hoặc kéo tệp vào đây để tải lên' })}
            </BaseTitle>
            <BaseText className='text-justify text-xs font-normal  text-dark-60'>
              {description ??
                t('file_size_less_mb', { defaultValue: 'CSV, XLS hoặc XLSX, kích thước tệp nhỏ hơn 20 MB.' })}
            </BaseText>
            <div className='flex gap-4'></div>
          </BaseTypography>
        </div>
        <div className='flex items-center gap-2'>
          {extraButton}
          <BaseButton className='text-sm font-semibold'>{t('choose_file', { defaultValue: 'Chọn tệp' })}</BaseButton>
        </div>
      </div>
    </BaseUploadDragger>
  )
})
