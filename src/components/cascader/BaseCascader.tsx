import { Cascader } from 'antd'
import { CascaderAutoProps, DefaultOptionType, type CascaderRef } from 'antd/es/cascader'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'

export type BaseCascaderProps<T extends DefaultOptionType, K extends keyof T = keyof T> = CascaderAutoProps<T, K> & {}

export default forwardRef(function BaseCascader<T extends DefaultOptionType, K extends keyof T = keyof T>(
  props: BaseCascaderProps<T, K>,
  ref: Ref<CascaderRef> | null,
) {
  const { className, ...restProps } = props

  return (
    <Cascader
      ref={ref}
      className={twMerge(
        `
          
        `,
        className,
      )}
      suffixIcon={<BaseKeyboardArrowDownIcon className='pointer-events-none' />}
      {...restProps}
    />
  )
})
