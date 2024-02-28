import { type BaseTableProps } from './base-table.type'

export type BaseTableAreaProps<T> = Omit<BaseTableProps<T>, 'pagination' | 'columns' | 'toolbar' | 'size'> & {}
