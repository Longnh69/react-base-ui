import { Tooltip } from 'antd'
import { type TooltipPropsWithOverlay } from 'antd/es/tooltip'
import { twMerge } from 'tailwind-merge'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import useDynamicClassName from '../../hooks/useDynamicClassName'

export interface BaseTooltipProps extends TooltipPropsWithOverlay, PropsWithStyleCss {
  hidden?: boolean
}

export default function BaseTooltip(props: BaseTooltipProps) {
  const { hidden, className, children, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  if (hidden) {
    return <>{children}</>
  }

  return (
    <Tooltip
      className={twMerge(
        `
          
        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    >
      {children}
    </Tooltip>
  )
}
