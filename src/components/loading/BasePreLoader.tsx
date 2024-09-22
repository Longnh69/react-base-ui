import { twMerge } from 'tailwind-merge'
import useDynamicClassName from '../../hooks/useDynamicClassName'
import { type PropsWithClassName } from '../../types/props-with-class-name.type'
import { type PropsWithStyleCss } from '../../types/props-with-style-css.type'
import styles from './BasePreLoader.module.css'

export interface BasePreLoaderProps extends PropsWithClassName, PropsWithStyleCss {}

export default function BasePreLoader(props: BasePreLoaderProps) {
  const { className, styleCss } = props
  const { dynamicClassName } = useDynamicClassName({ styleCss })

  return (
    <div
      className={twMerge(
        `
          flex h-dvh w-full items-center justify-center bg-white dark:bg-dark-888
        `,
        className,
        dynamicClassName,
      )}
    >
      <div className={twMerge('flex h-24 w-24', styles[`base-preloader`])}>
        <div className={styles[`base-preloader-line-1`]}></div>
        <div className={styles[`base-preloader-line-2`]}></div>
        <div className={styles[`base-preloader-line-3`]}></div>
        <div className={styles[`base-preloader-line-4`]}></div>
        <div className={styles[`base-preloader-line-5`]}></div>
      </div>
    </div>
  )
}
