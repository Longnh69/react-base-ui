import { Form, type FormItemProps, TreeSelect, type TreeSelectProps } from 'antd'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export interface BaseTreeSelectProps extends TreeSelectProps {
  name?: FormItemProps['name']
}

export default function BaseTreeSelect(props: BaseTreeSelectProps) {
  const form = Form.useFormInstance()

  const { name, className, treeData, ...restProps } = props
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
                className='inline-block cursor-pointer text-blue-219'
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
                className='inline-block cursor-pointer text-blue-219'
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
