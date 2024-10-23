import { RefSelectProps, TreeSelect, type TreeSelectProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import { forwardRef, Ref } from 'react'
import { useTranslation } from 'react-i18next'
import BaseKeyboardArrowDownIcon from '../icon/BaseKeyboardArrowDownIcon'
import _ from 'lodash'

export interface BaseTreeSelectProps extends TreeSelectProps, PropsWithStyleCss {}

export default forwardRef(function BaseTreeSelect(props: BaseTreeSelectProps, ref: Ref<RefSelectProps> | null) {
  const { className, loading, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <TreeSelect
      ref={ref}
      loading={loading}
      placeholder={t('choose', { name: t('value') })}
      allowClear
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
      suffixIcon={!loading ? <BaseKeyboardArrowDownIcon className='pointer-events-none' /> : undefined}
      filterTreeNode={(inputValue: string, option) => {
        const inputValueLowerCase = inputValue.toLowerCase()
        const { children, label, name, value } = option ?? {}

        return (
          _.includes(_.toLower(_.toString(children)), inputValueLowerCase) ||
          _.includes(_.toLower(_.toString(name)), inputValueLowerCase) ||
          _.includes(_.toLower(_.toString(label)), inputValueLowerCase) ||
          _.includes(_.toLower(_.toString(value)), inputValueLowerCase)
        )
      }}
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
