import { type BaseTableHeaderCellProps } from '../../types/base-table-cell.type'
import { motion } from 'framer-motion'

export default function BaseTableHeaderCell(props: BaseTableHeaderCellProps) {
  const { animation, children, ...restProps } = props

  if (animation) {
    return (
      <motion.th
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.55 } }}
        exit={{ x: -200, opacity: 0, transition: { duration: 0.55 } }}
        {...restProps}
      >
        {children}
      </motion.th>
    )
  }

  return <th {...restProps}>{children}</th>
}
