import { Form, Table } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseForm from '../../../form/BaseForm'
import useBaseTable from '../../hooks/useBaseTable'
import { type BaseTableAreaProps } from '../../types/base-table-area.type'
import BaseTableBodyCell from './BaseTableBodyCell'
import BaseTableBodyRow from './BaseTableBodyRow'

export default function BaseTableArea<T extends Record<PropertyKey, any>>(props: BaseTableAreaProps<T>) {
  const form = Form.useFormInstance()

  const { columns, density } = useBaseTable<T>()
  const { className, draggable, onSorterChange, onChange, onRow, ...restProps } = props

  return (
    <BaseForm form={form} component={false}>
      <Table
        className={twMerge(
          `
          w-full
          [&_.ant-table-body]:scrollbar
          [&_.ant-table-content]:scrollbar
          [&_thead_tr_th]:bg-primary
        `,
          className,
        )}
        columns={columns}
        scroll={{ x: 2000 }}
        sticky
        size={density}
        components={{
          header: {},
          body: {
            row: BaseTableBodyRow,
            cell: BaseTableBodyCell,
          },
        }}
        onRow={(record: T, index?: number) => {
          return {
            draggable,
            ...onRow?.(record, index),
          }
        }}
        onChange={(pagination, filters, sorter, extra) => {
          const { action } = extra

          switch (action) {
            case 'sort': {
              onSorterChange?.(sorter)
              break
            }

            default: {
              break
            }
          }

          onChange?.(pagination, filters, sorter, extra)
        }}
        pagination={false}
        {...restProps}
      />
    </BaseForm>
  )
}
