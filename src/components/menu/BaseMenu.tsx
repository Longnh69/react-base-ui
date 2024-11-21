import { Menu, type MenuProps, type MenuRef } from 'antd'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseMenuItem = Required<MenuProps>['items'][number]

export type BaseMenuItems = Required<MenuProps>['items']

export interface BaseMenuProps extends MenuProps, PropsWithStyleCss {}

export default forwardRef(function BaseMenu(props: BaseMenuProps, ref: Ref<MenuRef> | null) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Menu
      ref={ref}
      className={twMerge(
        `
          [&_.ant-menu-item.ant-menu-item-selected]:dark:text-primaryText [&_.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-primaryText w-full border-none
          bg-white
          dark:bg-dark-09090b
          [&_.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-white
          [&_.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:text-white
          [&_.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected>.ant-menu-submenu-title]:dark:bg-primary
          [&_.ant-menu.ant-menu-sub.ant-menu-inline]:dark:bg-dark-18181b
          [&_.ant-menu.ant-menu-sub.ant-menu-vertical]:dark:bg-dark-18181b
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
