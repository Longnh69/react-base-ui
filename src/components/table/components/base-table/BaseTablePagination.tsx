import BasePagination from '../../../pagination/BasePagination'
import { type BaseTablePaginationProps } from '../../types/base-table-pagination.type'

export default function BaseTablePagination<T>(props: BaseTablePaginationProps<T>) {
  if (props) {
    const { current, ...restPagination } = props

    return <BasePagination current={current ?? 1} total={0} showSizeChanger showQuickJumper {...restPagination} />
  }

  return <></>
}
