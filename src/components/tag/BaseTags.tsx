import { Flex, type TagProps } from 'antd'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import { type BaseFlexProps } from '../flex/BaseFlex'
import BaseTag from './BaseTag'

export interface BaseTagsProps extends Omit<BaseFlexProps, 'children'> {
  items: TagProps[]
}

export default function BaseTags(props: BaseTagsProps) {
  const { className, items, ...restProps } = props

  if (_.size(items)) {
    return (
      <Flex
        className={twMerge(
          `
            flex-wrap
          `,
          className,
        )}
        {...restProps}
      >
        {_.map(items, (item, index) => (
          <BaseTag key={index} spaceY {...item} />
        ))}
      </Flex>
    )
  }

  return <></>
}
