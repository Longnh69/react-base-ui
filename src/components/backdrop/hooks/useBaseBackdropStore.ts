import { create } from 'zustand'

interface BaseBackdropState {
  isOpenBackdrop: boolean
  isCountBackdrop: boolean
  showBackdropMessage?: string
  setBackdrop: (payload: { isOpenBackdrop: boolean; isCountBackdrop?: boolean; showBackdropMessage?: string }) => void
}

const useBaseBackdropStore = create<BaseBackdropState>((set) => ({
  isOpenBackdrop: false,
  isCountBackdrop: false,
  setBackdrop: (payload) => {
    set(payload)
  },
}))
export default useBaseBackdropStore
