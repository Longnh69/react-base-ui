import { Flex, Pagination, Select, Space, type PaginationProps } from 'antd'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../button/BaseButton'
import NavigateNextIcon from '../icon/BaseNavigateNextIcon'
import NavigatePreviousIcon from '../icon/BaseNavigatePreviousIcon'
import BaseSelect from '../select/BaseSelect'
import BaseText from '../typography/BaseText'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

const { Option } = Select

export interface BasePaginationProps extends PaginationProps, PropsWithStyleCss {}

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
    styleCss,
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

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  const [localPageSize, setLocalPageSize] = useState(pageSize ?? defaultCurrent ?? 20)

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
          dynamicClassName,
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
