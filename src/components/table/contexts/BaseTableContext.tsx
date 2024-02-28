import _ from 'lodash'
import { createContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'
import { useUpdateEffect } from 'react-use'
import { type BaseCheckboxValueType } from '../../checkbox/BaseCheckbox'
import { type BaseColumnsType } from '../types/base-table-column.type'
import { type BaseTableSizeType } from '../types/base-table.type'
import { type BaseTableToolbarProps } from '../types/base-table-toolbar.type'

export interface BaseTableContextProps<T> {
  columns: BaseColumnsType<T>
  allColumns: BaseColumnsType<T>
  showColumnIds: BaseCheckboxValueType[]
  fixedLeftColumns: BaseColumnsType<T>
  fixedRightColumns: BaseColumnsType<T>
  unFixedColumns: BaseColumnsType<T>
  density: BaseTableSizeType<T>
  toolbar?: BaseTableToolbarProps<T>
  onColumnsChange?: (columns: BaseColumnsType<T>) => void
  onColumnFixedChange?: (id: number, fixed: 'left' | 'right' | false) => void
  onColumnsDisplayReset?: () => void
  onShowColumnIdsChange?: Dispatch<SetStateAction<BaseCheckboxValueType[]>>
  onDensityChange?: Dispatch<SetStateAction<BaseTableSizeType<T>>>
}

interface BaseTableProviderProps<T> extends PropsWithChildren {
  columns: BaseColumnsType<T>
  toolbar?: BaseTableToolbarProps<T>
}

const BaseTableContext = createContext<BaseTableContextProps<any>>({
  columns: [],
  allColumns: [],
  showColumnIds: [],
  fixedLeftColumns: [],
  fixedRightColumns: [],
  unFixedColumns: [],
  density: 'large',
})

export function BaseTableProvider<T>(props: BaseTableProviderProps<T>) {
  const { columns, children } = props

  const [newColumns, setNewColumns] = useState<BaseColumnsType<T>>(columns ?? [])
  const [showColumnIds, setShowColumnIds] = useState<BaseCheckboxValueType[]>(
    _.map(columns, (_column, index) => index + 1),
  )
  const [fixedLeftColumns, setFixedLeftColumns] = useState<BaseColumnsType<T>>([])
  const [fixedRightColumns, setFixedRightColumns] = useState<BaseColumnsType<T>>([])
  const [unFixedColumns, setUnFixedColumns] = useState<BaseColumnsType<T>>([])
  const [density, setDensity] = useState<BaseTableSizeType<T>>('large')

  const handleColumnsChange = (columns: BaseColumnsType<T>) => {
    const fixedLeft: BaseColumnsType<T> = []
    const fixedRight: BaseColumnsType<T> = []
    const unFixed: BaseColumnsType<T> = []

    _.forEach(columns, (column) => {
      const { fixed } = column

      if (fixed === 'left') {
        return fixedLeft.push(column)
      }

      if (fixed === 'right') {
        return fixedRight.push(column)
      }

      return unFixed.push(column)
    })

    setFixedLeftColumns(fixedLeft)
    setFixedRightColumns(fixedRight)
    setUnFixedColumns(unFixed)
    setNewColumns(columns)
  }

  const handleColumnFixedChange = (id: number, fixed: 'left' | 'right' | false) => {
    const found = _.find(newColumns, { id })

    if (found) {
      const newFixedLeftColumns = _.filter(fixedLeftColumns, (column) => !_.eq(column.id, id))
      const newFixedRightColumns = _.filter(fixedRightColumns, (column) => !_.eq(column.id, id))
      const newUnFixedColumns = _.filter(unFixedColumns, (column) => !_.eq(column.id, id))

      if (fixed === 'left') {
        found.fixed = 'left'

        setFixedLeftColumns(_.concat(newFixedLeftColumns, found))
        setFixedRightColumns(newFixedRightColumns)
        setUnFixedColumns(newUnFixedColumns)
        setNewColumns(_.concat(newFixedLeftColumns, found, newUnFixedColumns, newFixedRightColumns))
      }
      if (fixed === 'right') {
        found.fixed = 'right'

        setFixedLeftColumns(newFixedLeftColumns)
        setFixedRightColumns(_.concat(newFixedRightColumns, found))
        setUnFixedColumns(newUnFixedColumns)
        setNewColumns(_.concat(newFixedLeftColumns, newUnFixedColumns, newFixedRightColumns, found))
      }
      if (!fixed) {
        found.fixed = undefined

        setFixedLeftColumns(newFixedLeftColumns)
        setFixedRightColumns(newFixedRightColumns)
        setUnFixedColumns(_.concat(newUnFixedColumns, found))
        setNewColumns(_.concat(newFixedLeftColumns, newUnFixedColumns, found, newFixedRightColumns))
      }
    }
  }

  const handleColumnsDisplayReset = () => {
    const fixedLeft: BaseColumnsType<T> = []
    const fixedRight: BaseColumnsType<T> = []
    const unFixed: BaseColumnsType<T> = []

    _.forEach(columns, (column, index) => {
      const { fixed } = column

      if (fixed === 'left') {
        return fixedLeft.push({
          ...column,
          id: index + 1,
        })
      }

      if (fixed === 'right') {
        return fixedRight.push({
          ...column,
          id: index + 1,
        })
      }

      return unFixed.push({
        ...column,
        id: index + 1,
      })
    })

    const all = _.concat(fixedLeft, unFixed, fixedRight)

    setFixedLeftColumns(fixedLeft)
    setFixedRightColumns(fixedRight)
    setUnFixedColumns(unFixed)
    setNewColumns(all)
    setShowColumnIds(_.compact(_.map(all, 'id')))
  }

  useUpdateEffect(() => {
    handleColumnsDisplayReset()
  }, [columns])

  return (
    <BaseTableContext.Provider
      value={{
        columns: _.filter(newColumns, (columns) => _.includes(showColumnIds, columns.id)),
        allColumns: newColumns,
        showColumnIds,
        fixedLeftColumns,
        fixedRightColumns,
        unFixedColumns,
        density,
        onColumnsChange: handleColumnsChange,
        onColumnsDisplayReset: handleColumnsDisplayReset,
        onColumnFixedChange: handleColumnFixedChange,
        onShowColumnIdsChange: setShowColumnIds,
        onDensityChange: setDensity,
      }}
    >
      {children}
    </BaseTableContext.Provider>
  )
}

export default BaseTableContext
