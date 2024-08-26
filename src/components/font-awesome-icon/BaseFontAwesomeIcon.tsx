import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export interface BaseFontAwesomeIconProps extends FontAwesomeIconProps {}

export default function BaseFontAwesomeIcon(props: BaseFontAwesomeIconProps) {
  return <FontAwesomeIcon {...props} />
}
