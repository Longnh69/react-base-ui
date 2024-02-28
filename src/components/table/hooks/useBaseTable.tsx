import { useContext } from 'react'
import BaseTableContext, { type BaseTableContextProps } from '../contexts/BaseTableContext'

export default function useBaseTable<T>() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return useContext<BaseTableContextProps<T>>(BaseTableContext)
}
