import { ReloadOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import BaseButton from '../../../../button/BaseButton'
import { type BaseTableToolbarProps } from '../../../types/base-table-toolbar.type'
import BaseTableToolbarDensity from './BaseTableToolbarDensity'
import BaseTableToolbarSetting from './BaseTableToolbarSetting'

export default function BaseTableToolbar<T>(props: BaseTableToolbarProps<T>) {
  const { title, setting, right, left } = props

  return (
    <Flex justify='space-between'>
      <Flex>{right ?? <div>{title}</div>}</Flex>
      <Flex gap={4}>
        {left ?? (
          <>
            <BaseButton color='white'>
              <ReloadOutlined />
            </BaseButton>
            <BaseTableToolbarDensity />
            <BaseTableToolbarSetting {...setting} />
          </>
        )}
      </Flex>
    </Flex>
  )
}
