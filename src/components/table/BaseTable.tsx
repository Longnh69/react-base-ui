import { Flex } from 'antd'
import BaseTableArea from './components/base-table/BaseTableArea'
import BaseTablePagination from './components/base-table/BaseTablePagination'
import BaseTableToolbar from './components/base-table/toolbar/BaseTableToolbar'
import { BaseTableProvider } from './contexts/BaseTableContext'
import { type BaseColumnsType } from './types/base-table-column.type'
import { type BaseTableProps } from './types/base-table.type'

export default function BaseTable<T extends Record<PropertyKey, any>>(props: BaseTableProps<T>) {
  const { pagination, columns, toolbar, ...restProps } = props

  return (
    <BaseTableProvider columns={columns as BaseColumnsType<T>} toolbar={toolbar}>
      <Flex vertical gap={12}>
        {toolbar && <BaseTableToolbar {...toolbar} />}
        <BaseTableArea {...restProps} />
        {pagination && <BaseTablePagination {...pagination} />}
      </Flex>
    </BaseTableProvider>
  )
}
