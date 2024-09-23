import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../../types/props-with-style-css.type'

library.add(fas, far, fab)

export interface BaseFontAwesomeIconProps extends FontAwesomeIconProps, PropsWithStyleCss {}

export default function BaseFontAwesomeIcon(props: BaseFontAwesomeIconProps) {
  const { className, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return <FontAwesomeIcon className={twMerge(dynamicClassName, className)} {...restProps} />
}
