import { Menu, type MenuProps, type MenuRef } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export type BaseMenuItem = Required<MenuProps>['items'][number]

export type BaseMenuItems = Required<MenuProps>['items']

export interface BaseMenuProps extends MenuProps {}

export default forwardRef(function BaseMenu(props: BaseMenuProps, ref: Ref<MenuRef> | null) {
  const { className, ...restProps } = props

  return (
    <Menu
      ref={ref}
      className={twMerge(
        `
          w-full border-none bg-white dark:bg-dark-999
          [&_.ant-menu-item.ant-menu-item-selected]:dark:bg-transparent
          [&_.ant-menu-item.ant-menu-item-selected]:dark:text-primary
          [&_.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-primary
          [&_.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-primary
          [&_.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-primary
          [&_.ant-menu.ant-menu-sub.ant-menu-inline]:dark:bg-dark-888
          [&_.ant-menu.ant-menu-sub.ant-menu-vertical]:dark:bg-dark-888
        `,
        className,
      )}
      {...restProps}
    />
  )
})
