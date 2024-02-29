/* eslint-disable react-hooks/rules-of-hooks */
import {
  type BaseColumnGroupType,
  type BaseColumnType,
  type BaseColumnsType,
} from '@/components/table/types/base-table-column.type'
import { ESortOrder } from '@/enums/sorter.enum'
import { CalendarOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Divider, Flex, Space, type InputRef } from 'antd'
import { type CheckboxValueType } from 'antd/es/checkbox/Group'
import { type SorterResult } from 'antd/es/table/interface'
import _ from 'lodash'
import { useRef, useState, type Key } from 'react'
import { useTranslation } from 'react-i18next'
import { useUpdateEffect } from 'react-use'
import { twMerge } from 'tailwind-merge'
import BaseButton from '../../button/BaseButton'
import BaseCheckboxGroup from '../../checkbox/BaseCheckboxGroup'
import BaseInput from '../../input/BaseInput'
import BaseDatePicker, { type BaseDatePickerValue } from '../../picker/BaseDatePicker'
import BaseDateRangePicker, { type BaseDateRangePickerValue } from '../../picker/BaseDateRangePicker'
import BaseDateTimePicker, { type BaseDateTimePickerValue } from '../../picker/BaseDateTimePicker'
import BaseRadioGroup from '../../radio/BaseRadioGroup'
import BaseSelect from '../../select/BaseSelect'
import {
  type BaseTableCheckboxFilterParams,
  type BaseTableDatePickerFilterParams,
  type BaseTableDateRangePickerFilterParams,
  type BaseTableDateTimePickerFilterParams,
  type BaseTableInputFilterParams,
  type BaseTableRadioFilterParams,
  type BaseTableSelectFilterParams,
} from '../types/base-table-filter.type'
import { type BaseTableSorterParams } from '../types/base-table-sorter.type'
import { type BaseTableBodyCellProps } from '../types/base-table-cell.type'

const getColumnMergedCell = <T,>(columns: BaseColumnsType<T>, isEditing?: ((record: T) => boolean) | null) => {
  return _.map(columns, (column, columnIndex) => {
    if (!_.size(column)) {
      return column
    }

    const { ellipsis, onCell } = column
    const { dataIndex, editable, fieldType, fieldProps, rules } = column as BaseColumnType<T>
    const { children } = column as BaseColumnGroupType<T>
    const common = {
      ellipsis,
    }

    // Có children => column is BaseColumnGroupType<T>
    if (children) {
      ;(column as BaseColumnGroupType<T>).children = getColumnMergedCell(children, isEditing)
    }

    if (editable && isEditing) {
      return {
        id: columnIndex,
        ...column,
        onCell: (record: T, index?: number) => {
          return {
            ...((): BaseTableBodyCellProps => {
              if (
                _.isBoolean(editable) ||
                (_.isFunction(editable) && editable(dataIndex ? _.get(record, dataIndex) : null, record, index))
              ) {
                return {
                  editable: true,
                  isEditing: isEditing?.(record),
                  dataIndex,
                  fieldType,
                  fieldProps,
                  rules,
                }
              }
              return {
                editable: false,
              }
            })(),
            ...common,
            ...onCell?.(record, index),
          }
        },
      }
    }

    return {
      id: columnIndex,
      ...column,
      onCell: (record: T, index?: number) => {
        return {
          ...common,
          ...onCell?.(record, index),
        }
      },
    }
  })
}

const getSorterProps = <T,>(baseTableSorterParams: BaseTableSorterParams): BaseColumnType<T> => {
  const { dataIndex, sorter } = baseTableSorterParams
  const { order, column } = sorter ?? {}
  const { sorterDataIndex } = column ?? {}

  return {
    sorter: true,
    showSorterTooltip: false,
    sortOrder: sorterDataIndex === dataIndex ? order : null,
    sorterDataIndex: dataIndex,
  }
}

const getInputFilterProps = <T,>(baseTableInputFilterParams: BaseTableInputFilterParams): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableInputFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const searchInput = useRef<InputRef>(null)
      const [searchValue, setSearchValue] = useState<Key>('')

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys[0])
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys[0])
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue('')
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value: Key = filter ? _.get(filter, dataIndex)?.toString() : searchValue
          setSelectedKeys(value ? [value] : [])
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseInput
            ref={searchInput}
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={handleConfirm}
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <SearchOutlined />
      </Space>
    ),
  }
}

const getSelectFilterProps = <T,>(baseTableSelectFilterParams: BaseTableSelectFilterParams): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, mode, className, ...restProps } = baseTableSelectFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<Key | Key[]>('')

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()

        if (mode) {
          setSearchValue(selectedKeys)
          onFilterChange?.((prev) => {
            return _.set(_.cloneDeep(prev), dataIndex, selectedKeys)
          })
        } else {
          setSearchValue(selectedKeys[0])
          onFilterChange?.((prev) => {
            return _.set(_.cloneDeep(prev), dataIndex, selectedKeys[0])
          })
        }
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()

          if (mode) {
            setSearchValue([])
          } else {
            setSearchValue('')
          }
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          if (mode) {
            const value: Key[] = filter ? _.get(filter, dataIndex) : searchValue
            console.log(value)
            setSelectedKeys(value || [])
          } else {
            const value: Key = filter ? _.get(filter, dataIndex)?.toString() : searchValue
            setSelectedKeys(value ? [value] : [])
          }
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseSelect
            value={mode ? selectedKeys : selectedKeys[0]}
            onChange={(value) => {
              if (mode) {
                setSelectedKeys((value || []) as Key[])
              } else {
                setSelectedKeys(value ? ([value] as Key[]) : [])
              }
            }}
            mode={mode}
            autoClearSearchValue
            className={twMerge(
              `
                max-w-80
              `,
              className,
            )}
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <FilterOutlined />
      </Space>
    ),
  }
}

const getCheckboxFilterProps = <T,>(
  baseTableCheckboxFilterParams: BaseTableCheckboxFilterParams,
): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableCheckboxFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<CheckboxValueType[]>([])

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys as CheckboxValueType[])
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys)
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue([])
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value = filter ? _.get(filter, dataIndex) || [] : searchValue
          setSelectedKeys(value as Key[])
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseCheckboxGroup
            value={selectedKeys as CheckboxValueType[]}
            onChange={(value) => {
              setSelectedKeys(value as Key[])
            }}
            vertical
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <FilterOutlined />
      </Space>
    ),
  }
}

const getRadioFilterProps = <T,>(baseTableRadioFilterParams: BaseTableRadioFilterParams): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableRadioFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<Key>('')

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys[0])
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys[0])
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue('')
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value: Key = filter ? _.get(filter, dataIndex)?.toString() : searchValue
          setSelectedKeys(value ? [value] : [])
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseRadioGroup
            value={selectedKeys[0]}
            onChange={(event) => {
              const value: Key = event.target.value
              setSelectedKeys(value ? [value] : [])
            }}
            vertical
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <FilterOutlined />
      </Space>
    ),
  }
}

const getDatePickerFilterProps = <T,>(
  baseTableDatePickerFilterParams: BaseTableDatePickerFilterParams,
): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableDatePickerFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<BaseDatePickerValue>(null)

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys[0])
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys[0])
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue(null)
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value: Key = filter ? _.get(filter, dataIndex) : searchValue
          setSelectedKeys(value ? [value] : [])
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseDatePicker
            value={selectedKeys[0]}
            onChange={(value) => {
              setSelectedKeys(value ? ([value] as unknown as Key[]) : [])
            }}
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <CalendarOutlined />
      </Space>
    ),
  }
}

const getDateTimePickerFilterProps = <T,>(
  baseTableDateTimePickerFilterParams: BaseTableDateTimePickerFilterParams,
): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableDateTimePickerFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<BaseDateTimePickerValue>(null)

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys[0])
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys[0])
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue(null)
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value: Key = filter ? _.get(filter, dataIndex) : searchValue
          setSelectedKeys(value ? [value] : [])
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseDateTimePicker
            value={selectedKeys[0]}
            onChange={(value) => {
              setSelectedKeys(value ? ([value] as unknown as Key[]) : [])
            }}
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <CalendarOutlined />
      </Space>
    ),
  }
}

const getDateRangePickerFilterProps = <T,>(
  baseTableDateRangePickerFilterParams: BaseTableDateRangePickerFilterParams,
): BaseColumnType<T> => {
  const { dataIndex, filter, onFilterChange, ...restProps } = baseTableDateRangePickerFilterParams

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close, visible }) => {
      const [searchValue, setSearchValue] = useState<BaseDateRangePickerValue>(null)

      const { t } = useTranslation()

      const handleConfirm = () => {
        confirm()
        setSearchValue(selectedKeys as unknown as BaseDateRangePickerValue)
        onFilterChange?.((prev) => {
          return _.set(_.cloneDeep(prev), dataIndex, selectedKeys)
        })
      }

      const handleReset = () => {
        if (clearFilters) {
          clearFilters()
          setSearchValue([null, null])
        }
      }

      useUpdateEffect(() => {
        if (visible) {
          const value: Key[] = filter ? _.get(filter, dataIndex) : searchValue
          setSelectedKeys(value)
        }
      }, [visible])

      return (
        <Flex
          gap={12}
          vertical
          className='p-2 shadow'
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
        >
          <BaseDateRangePicker
            value={selectedKeys as unknown as BaseDateRangePickerValue}
            onChange={(value) => {
              setSelectedKeys(value as unknown as Key[])
            }}
            {...restProps}
          />
          <Divider className='m-0' />
          <Space className='justify-between'>
            <BaseButton type='link' onClick={close}>
              {t('close')}
            </BaseButton>
            <Space>
              <BaseButton onClick={handleReset}>{t('reset')}</BaseButton>
              <BaseButton type='primary' onClick={handleConfirm}>
                {t('OK')}
              </BaseButton>
            </Space>
          </Space>
        </Flex>
      )
    },
    filterIcon: () => (
      <Space>
        <CalendarOutlined />
      </Space>
    ),
  }
}

const getParsedSorter = <T,>(sorter: SorterResult<T> | Array<SorterResult<T>>, defaultValue?: object) => {
  const order = _.get(sorter, 'order')
  const key = _.get(sorter, 'column.sorterDataIndex') ?? _.get(sorter, 'field')

  if (key && order) {
    switch (order) {
      case 'ascend': {
        return {
          [key]: ESortOrder.asc,
        }
      }

      case 'descend': {
        return {
          [key]: ESortOrder.desc,
        }
      }

      default: {
        return defaultValue ?? {}
      }
    }
  }

  return defaultValue ?? {}
}

export default {
  getColumnMergedCell,
  getSorterProps,
  getInputFilterProps,
  getSelectFilterProps,
  getCheckboxFilterProps,
  getRadioFilterProps,
  getDatePickerFilterProps,
  getDateTimePickerFilterProps,
  getDateRangePickerFilterProps,
  getParsedSorter,
}
