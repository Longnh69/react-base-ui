import { Breadcrumb, type BreadcrumbProps } from 'antd'
import { twMerge } from 'tailwind-merge'

export type BaseBreadcrumbItem = Required<BreadcrumbProps>['items'][number]

export type BaseBreadcrumbItems = Required<BreadcrumbProps>['items']

export interface BaseBreadcrumbProps extends BreadcrumbProps {}

export default function BaseBreadcrumb(props: BaseBreadcrumbProps) {
  const { className, rootClassName, ...restProps } = props

  return (
    <Breadcrumb
      className={twMerge(
        `
          w-full bg-white p-4 dark:bg-dark-999
        `,
        className,
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
