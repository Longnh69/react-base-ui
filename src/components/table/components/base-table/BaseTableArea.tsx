import { Form, Table } from 'antd'
import { twMerge } from 'tailwind-merge'
import BaseForm from '../../../form/BaseForm'
import useBaseTable from '../../hooks/useBaseTable'
import { type BaseTableAreaProps } from '../../types/base-table-area.type'
import BaseTableBodyCell from './BaseTableBodyCell'
import BaseTableBodyRow from './BaseTableBodyRow'
import _ from 'lodash'
import useDynamicClassName from '../../../../hooks/useDynamicClassName'

export default function BaseTableArea<T extends Record<PropertyKey, any>>(props: BaseTableAreaProps<T>) {
  const form = Form.useFormInstance()

  const { className, styleCss, draggable, onSorterChange, onChange, onRow, ...restProps } = props

  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { columns, density } = useBaseTable<T>()

  return (
    <BaseForm form={form} component={false}>
      <Table
        className={twMerge(
          `
          dark:[&_thead_tr_th]:text-primaryText
          w-full
          [&_.ant-table-body]:scrollbar
          [&_.ant-table-content]:scrollbar
          [&_.ant-table-sticky-scroll]:hidden
          dark:[&_thead_tr_th]:bg-primary
        `,
          className,
          dynamicClassName,
        )}
        columns={columns}
        scroll={_.size(columns) ? { x: 2000 } : undefined}
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
