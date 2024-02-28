import { BackTopProps, FloatButton, FloatButtonRef } from 'antd'
import { Ref, forwardRef } from 'react'

interface BaseBackTopProps extends BackTopProps {}

const { BackTop } = FloatButton

export default forwardRef(function BaseBackTop(props: BaseBackTopProps, ref: Ref<FloatButtonRef> | undefined) {
  return <BackTop ref={ref} duration={600} {...props} />
})
