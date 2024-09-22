import { Typography } from 'antd'
import { type TypographyProps } from 'antd/es/typography/Typography'
import _ from 'lodash'
import { forwardRef, type Ref } from 'react'
import BaseTooltip, { type BaseTooltipProps } from '../tooltip/BaseTooltip'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export interface BaseTypographyProps<T extends keyof JSX.IntrinsicElements>
  extends TypographyProps<T>,
    PropsWithStyleCss {
  tooltipProps?: BaseTooltipProps
}

export default forwardRef(function BaseTypography<T extends keyof JSX.IntrinsicElements>(
  props: BaseTypographyProps<T>,
  ref: Ref<HTMLElement> | null,
) {
  const { className, styleCss, tooltipProps, ...restProps } = props
  const { overlayClassName, ...restTooltipProps } = tooltipProps ?? {}
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  const typography = (
    <Typography
      ref={ref}
      className={twMerge(
        `

        `,
        className,
        dynamicClassName,
      )}
      {...restProps}
    />
  )

  return _.size(tooltipProps) ? (
    <BaseTooltip
      overlayClassName={twMerge(
        `
          text-xs whitespace-pre-line
        `,
        overlayClassName,
      )}
      {...restTooltipProps}
    >
      {typography}
    </BaseTooltip>
  ) : (
    typography
  )
})
