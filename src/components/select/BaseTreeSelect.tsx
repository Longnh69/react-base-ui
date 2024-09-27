import { Form, type FormItemProps, TreeSelect, type TreeSelectProps } from 'antd'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseTreeSelectProps extends TreeSelectProps, PropsWithStyleCss {
  name?: FormItemProps['name']
}

export default function BaseTreeSelect(props: BaseTreeSelectProps) {
  const form = Form.useFormInstance()

  const { name, className, styleCss, treeData, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })
  const { t } = useTranslation()

  return (
    <TreeSelect
      allowClear
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
      dropdownStyle={{ maxHeight: '300px' }}
      onChange={(value) => {
        if (form) {
          form.setFieldsValue({
            [name]: value,
          })
        }
      }}
      value={form.getFieldValue(name)}
      className={twMerge(
        `
        `,
        className,
        dynamicClassName,
      )}
      treeData={[
        {
          title:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            form && _.size(form.getFieldValue(name)) ? (
              <span
                onClick={() => {
                  if (form) {
                    form.setFieldsValue({
                      [name]: [],
                    })
                  }
                }}
                className='text-blue-286fbe inline-block cursor-pointer'
              >
                {t('unselect_all')}
              </span>
            ) : (
              <span
                onClick={() =>
                  form.setFieldsValue({
                    [name]: _.map(treeData, 'value'),
                  })
                }
                className='text-blue-286fbe inline-block cursor-pointer'
              >
                {t('select_all')}
              </span>
            ),
          value: 'xxx',
          disableCheckbox: true,
          disabled: true,
          checkable: false,
        },
        ...(treeData ?? []),
      ]}
      {...restProps}
    />
  )
}
