import { Button, type ButtonProps } from 'antd'
import _ from 'lodash'
import { forwardRef, type Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import BaseTooltip, { type BaseTooltipProps } from '../tooltip/BaseTooltip'

type Color = 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'cyan'

export interface BaseButtonProps extends ButtonProps, PropsWithStyleCss {
  tooltip?: boolean | BaseTooltipProps
  color?: Color | string
  border?: boolean
}

export default forwardRef(function BaseButton(props: BaseButtonProps, ref: Ref<HTMLButtonElement> | null) {
  const { className, styleCss, title, tooltip, color, border, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  const button = (
    <Button
      ref={ref}
      className={twMerge(
        `
          flex items-center justify-center 
        `,
        color &&
          `
            border transition-all
            [&_span]:transition-all
          `,
        color === 'white' &&
          `
          ${border && 'border-white hover:border-primary'}
          [&:hover_span]:text-primary
          [&:hover_span]:dark:text-primary
          [&_span]:text-black
          [&_span]:dark:text-white
          `,
        color === 'red' &&
          `
          ${border && 'border-red-600 hover:border-red-800'}
          [&:hover_span]:text-red-300
          [&_span]:text-red-600 
          `,
        color === 'green' &&
          `
          ${border && 'border-green-600 hover:border-green-800'}
          [&:hover_span]:text-green-300
          [&_span]:text-green-600 
          `,
        color === 'blue' &&
          `
          ${border && 'border-blue-600 hover:border-blue-800'}
          [&:hover_span]:text-blue-300
          [&_span]:text-blue-600 
          `,
        color === 'yellow' &&
          `
          ${border && 'border-yellow-600 hover:border-yellow-800'}
          [&:hover_span]:text-yellow-300
          [&_span]:text-yellow-600 
          `,
        color === 'cyan' &&
          `
          ${border && 'border-cyan-600 hover:border-cyan-800'}
          [&:hover_span]:text-cyan-300
          [&_span]:text-cyan-600 
          `,
        className,
        dynamicClassName,
      )}
      title={tooltip ? undefined : title}
      {...restProps}
    />
  )

  if (tooltip) {
    if (_.isBoolean(tooltip)) {
      return <BaseTooltip title={title}>{button}</BaseTooltip>
    }

    return (
      <BaseTooltip title={title} {...tooltip}>
        {button}
      </BaseTooltip>
    )
  }

  return button
})
