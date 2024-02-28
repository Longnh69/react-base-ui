import { Drawer, type DrawerProps } from 'antd'
import { twMerge } from 'tailwind-merge'

interface BaseDrawerProps extends DrawerProps {}

export default function BaseDrawer(props: BaseDrawerProps) {
  const { className, ...restProps } = props

  return (
    <Drawer
      className={twMerge(
        `

        `,
        className,
      )}
      {...restProps}
    />
  )
}
