import { PropsWithChildren } from 'react'

export interface BaseDynamicSvgIconProps extends PropsWithChildren {}

export default function BaseDynamicSvgIcon(props: BaseDynamicSvgIconProps) {
  const { children } = props

  return <div className='contents' dangerouslySetInnerHTML={{ __html: children || '' }} />
}
