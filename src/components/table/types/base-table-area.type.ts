import { type PropsWithStyleCss } from '../../../types/props-with-style-css.type'
import { type BaseTableProps } from './base-table.type'

export type BaseTableAreaProps<T> = Omit<BaseTableProps<T>, 'pagination' | 'columns' | 'toolbar' | 'size'> &
  PropsWithStyleCss
