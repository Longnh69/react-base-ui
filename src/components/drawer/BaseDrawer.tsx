import { Drawer, type DrawerProps } from 'antd'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'

export interface BaseDrawerProps extends DrawerProps {
  closePosition?: 'right' | 'left'
}

export default function BaseDrawer(props: BaseDrawerProps) {
  const { closePosition = 'right', className, ...restProps } = props

  return (
    <Drawer
      className={twMerge(
        `
          
        `,
        _.eq(closePosition, 'right') ? '[&_.ant-drawer-header-title]:flex-row-reverse' : '',
        className,
      )}
      {...restProps}
    />
  )
}
