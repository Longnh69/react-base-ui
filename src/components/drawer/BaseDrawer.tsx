import { Drawer, type DrawerProps } from 'antd'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseDrawerProps extends DrawerProps, PropsWithStyleCss {
  closePosition?: 'right' | 'left'
}

export default function BaseDrawer(props: BaseDrawerProps) {
  const { closePosition = 'right', className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Drawer
      className={twMerge(
        `
          
        `,
        _.eq(closePosition, 'right') ? '[&_.ant-drawer-header-title]:flex-row-reverse' : '',
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
}
