import BaseButton from '../../../../button/BaseButton'
import BaseDropdown from '../../../../dropdown/BaseDropdown'
import { type BaseMenuItems } from '../../../../menu/BaseMenu'
import { ColumnHeightOutlined } from '@ant-design/icons'
import useBaseTable from '../../../hooks/useBaseTable'
import { type BaseTableSizeType } from '../../../types/base-table.type'

export default function BaseTableToolbarDensity<T>() {
  const { density, onDensityChange } = useBaseTable<T>()

  const items: BaseMenuItems = [
    {
      key: 'large',
      label: 'Large',
    },
    {
      key: 'middle',
      label: 'Middle',
    },
    {
      key: 'small',
      label: 'Small',
    },
  ]

  return (
    <BaseDropdown
      menu={{
        items,
        selectedKeys: [density],
        onClick: ({ key }) => {
          onDensityChange?.(key as BaseTableSizeType<T>)
        },
      }}
      trigger={['click']}
    >
      <BaseButton color='white'>
        <ColumnHeightOutlined />
      </BaseButton>
    </BaseDropdown>
  )
}
