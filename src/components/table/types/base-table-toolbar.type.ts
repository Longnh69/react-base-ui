import { type ReactNode } from 'react'

export type BaseTableToolbarPersistenceType = {
  key: string
  type: 'localStorage' | 'sessionStorage'
}

type InitialOptionsType = { disabled?: boolean }

export type BaseTableToolbarSettingProps<T> = {
  /**
   * @description
   * Dùng thuộc tính 'key' ở trong column
   *
   * const columns = [
   *   {
   *     title: 'Age',
   *     dataIndex: 'age',
   *     key: 'age',
   *   }
   * ]
   *
   * ...
   *
   * initial: {
   *   age: {
   *     disabled: true // Vô hiệu hóa tắt cột
   *   }
   * }
   */
  initial?: { [key in keyof T]?: InitialOptionsType } | Record<string, InitialOptionsType>
}

export type BaseTableToolbarProps<T> = {
  title?: ReactNode
  /**
   * @description
   * Đặt key cho bảng để lưu vào local storage hoặc session storage, mặc định là local storage
   */
  persistence: BaseTableToolbarPersistenceType
  density?: boolean
  setting?: BaseTableToolbarSettingProps<T>
  onRefresh?: () => void
}
