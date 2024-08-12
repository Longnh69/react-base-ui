import { twMerge } from 'tailwind-merge'
import styles from './BasePreLoader.module.css'
import { type PropsWithClassName } from '../../types/common.type'

export interface BasePreLoaderProps extends PropsWithClassName {}

export default function BasePreLoader(props: BasePreLoaderProps) {
  const { className } = props

  return (
    <div
      className={twMerge(
        `
          flex h-dvh w-full items-center justify-center bg-white dark:bg-dark-888
        `,
        className,
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
