import { create } from 'zustand'
import { BaseStaticModalConfirmProps } from '../BaseStaticModalConfirm'

interface BaseBackdropState {
  props: BaseStaticModalConfirmProps
  setProps: (props: BaseStaticModalConfirmProps) => void
  setOpen: (open: boolean) => void
}

const useBaseStaticModalConfirmStore = create<BaseBackdropState>((set) => ({
  props: {},
  setProps: (props) => {
    set({ props })
  },
  setOpen: (open) => {
    set((state) => ({ props: { ...state.props, open } }))
  },
}))

export default useBaseStaticModalConfirmStore
