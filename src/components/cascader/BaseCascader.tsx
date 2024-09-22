import { Cascader } from 'antd'
import { CascaderAutoProps, DefaultOptionType, type CascaderRef } from 'antd/es/cascader'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseCascaderProps<T extends DefaultOptionType, K extends keyof T = keyof T> = CascaderAutoProps<T, K> &
  PropsWithStyleCss

export default forwardRef(function BaseCascader<T extends DefaultOptionType, K extends keyof T = keyof T>(
  props: BaseCascaderProps<T, K>,
  ref: Ref<CascaderRef> | null,
) {
  const { className, loading, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Cascader
      ref={ref}
      loading={loading}
      suffixIcon={!loading ? <BaseKeyboardArrowDownIcon className='pointer-events-none' /> : undefined}
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )
})
