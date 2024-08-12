import { Typography } from 'antd'
import { type TypographyProps } from 'antd/es/typography/Typography'
import _ from 'lodash'
import { forwardRef, type Ref } from 'react'
import BaseTooltip, { type BaseTooltipProps } from '../tooltip/BaseTooltip'
import { twMerge } from 'tailwind-merge'

export interface BaseTypographyProps<T extends keyof JSX.IntrinsicElements> extends TypographyProps<T> {
  tooltipProps?: BaseTooltipProps
}

export default forwardRef(function BaseTypography<T extends keyof JSX.IntrinsicElements>(
  props: BaseTypographyProps<T>,
  ref: Ref<HTMLElement> | null,
) {
  const { className, tooltipProps, ...restProps } = props
  const { overlayClassName, ...restTooltipProps } = tooltipProps ?? {}

  const typography = (
    <Typography
      ref={ref}
      className={twMerge(
        `

        `,
        className,
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
