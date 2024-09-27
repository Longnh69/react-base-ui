import { Breadcrumb, type BreadcrumbProps } from 'antd'
import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'

export type BaseBreadcrumbItem = Required<BreadcrumbProps>['items'][number]

export type BaseBreadcrumbItems = Required<BreadcrumbProps>['items']

export interface BaseBreadcrumbProps extends BreadcrumbProps, PropsWithStyleCss {}

export default function BaseBreadcrumb(props: BaseBreadcrumbProps) {
  const { className, rootClassName, styleCss, ...restProps } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <Breadcrumb
      className={twMerge(
        `
          dark:bg-dark-09090b w-full bg-white p-4
        `,
        className,
        dynamicClassName,
      )}
      rootClassName={twMerge(
        `

        `,
        rootClassName,
      )}
      {...restProps}
    />
  )
}
