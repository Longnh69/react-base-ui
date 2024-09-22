import { Flex, type TagProps } from 'antd'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import { type BaseFlexProps } from '../flex/BaseFlex'
import BaseTag from './BaseTag'

export interface BaseTagsProps extends Omit<BaseFlexProps, 'children'>, PropsWithStyleCss {
  items: TagProps[]
}

export default function BaseTags(props: BaseTagsProps) {
  const { className, items, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  if (_.size(items)) {
    return (
      <Flex
        className={twMerge(
          `
            flex-wrap
          `,
          className,
          dynamicClassName,
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
