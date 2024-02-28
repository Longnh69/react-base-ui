import { type PropsWithChildren } from 'react'

export type BaseTableBodyRowProps = PropsWithChildren & {
  index: number
  draggable?: boolean
  'data-row-key': string
}
