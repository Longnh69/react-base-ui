import { Cascader, type CascaderProps } from 'antd'
import { type CascaderRef } from 'antd/es/cascader'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'

export type BaseCascaderProps = CascaderProps & {}

export default forwardRef(function BaseCascader(props: BaseCascaderProps, ref: Ref<CascaderRef> | null) {
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
