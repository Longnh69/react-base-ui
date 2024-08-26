import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export interface BaseFontAwesomeIconProps extends FontAwesomeIconProps {}

export default function BaseFontAwesomeIcon(props: BaseFontAwesomeIconProps) {
  return <FontAwesomeIcon {...props} />
}
