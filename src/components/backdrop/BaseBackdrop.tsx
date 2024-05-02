import { Space } from 'antd'
import { useEffect, useLayoutEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import BaseSpin, { type BaseSpinProps } from '../spin/BaseSpin'
import BaseTypography from '../typography/BaseTypography'
import useBackdropStore from './hooks/useBackdropStore'

interface BaseBackdropProps extends BaseSpinProps {}

export default function BaseBackdrop(props: BaseBackdropProps) {
  const { isOpenBackdrop, isCountBackdrop, showBackdropMessage = '', setBackdrop } = useBackdropStore()
  const { className, ...restProps } = props

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isOpenBackdrop) {
      setCount(0)
    }
    if (isCountBackdrop) {
      const timer = setInterval(() => {
        setCount((count) => count + 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isOpenBackdrop, isCountBackdrop])

  useLayoutEffect(() => {
    if (isOpenBackdrop) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpenBackdrop])

  useEffect(() => {
    setBackdrop({ isOpenBackdrop: false })
  }, [])

  return isOpenBackdrop ? (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-dark-50 opacity-100 transition-opacity'>
      <Space className='flex-col'>
        <BaseSpin
          className={twMerge(
            `

            `,
            className,
          )}
          {...restProps}
        />
        <BaseTypography className='text-Base'>
          {`${showBackdropMessage ?? ''} ${isCountBackdrop ? `${count}s` : ''}`?.trim()}
        </BaseTypography>
      </Space>
    </div>
  ) : (
    <></>
  )
}
