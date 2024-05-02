import BaseButton from '@/components/button/BaseButton'
import NavigateNextIcon from '@/components/icon/BaseNavigateNextIcon'
import NavigatePreviousIcon from '@/components/icon/BaseNavigatePreviousIcon'
import BaseSelect from '@/components/select/BaseSelect'
import BaseText from '@/components/typography/BaseText'
import { Flex, Pagination, Select, Space, type PaginationProps } from 'antd'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

interface BasePaginationProps extends PaginationProps {}

const { Option } = Select

const itemRender: PaginationProps[`itemRender`] = (_page, type, element) => {
  switch (type) {
    case 'prev':
      return <BaseButton className='flex items-center justify-center' icon={<NavigatePreviousIcon />} />

    case 'next':
      return <BaseButton className='flex items-center justify-center' icon={<NavigateNextIcon />} />

    default:
      return element
  }
}

export default function BasePagination(props: BasePaginationProps) {
  const {
    className,
    current,
    defaultCurrent,
    defaultPageSize,
    pageSize,
    pageSizeOptions = _.sortBy(_.uniq(_.compact([10, 20, 50, 100, pageSize ?? 0]))),
    showSizeChanger,
    total,
    onChange,
    onShowSizeChange,
    ...restProps
  } = props

  const [localPageSize, setLocalPageSize] = useState(pageSize ?? defaultCurrent ?? 20)
  const { t } = useTranslation()

  useEffect(() => {
    onChange?.(current ?? defaultCurrent ?? 1, localPageSize)
  }, [localPageSize])

  return (
    <Space className='justify-between' size='middle'>
      {showSizeChanger && (
        <Flex align='center' gap={4}>
          <BaseSelect
            value={localPageSize}
            onChange={(value) => {
              setLocalPageSize(value as number)
            }}
            showSearch={false}
          >
            {_.map(pageSizeOptions, (option, index) => (
              <Option key={index} value={option}>
                {`${option}`}
              </Option>
            ))}
          </BaseSelect>
          <BaseText>{t('of_items', { count: total })}</BaseText>
        </Flex>
      )}
      <Pagination
        className={twMerge(
          `

          `,
          className,
        )}
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        itemRender={itemRender}
        {...restProps}
      />
    </Space>
  )
}
