import { Cascader, type CascaderProps } from 'antd'
import { type BaseOptionType, type CascaderRef } from 'antd/es/cascader'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export type BaseCascaderProps<T extends BaseOptionType> = CascaderProps<T> & {}

export default forwardRef(function BaseCascader<T extends BaseOptionType>(
  props: BaseCascaderProps<T>,
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
