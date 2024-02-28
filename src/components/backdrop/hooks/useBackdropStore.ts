import { create } from 'zustand'

interface BackdropState {
  isOpenBackdrop: boolean
  isCountBackdrop: boolean
  showBackdropMessage?: string
  setBackdrop: (payload: { isOpenBackdrop: boolean; isCountBackdrop?: boolean; showBackdropMessage?: string }) => void
}

const useBackdropStore = create<BackdropState>((set) => ({
  isOpenBackdrop: false,
  isCountBackdrop: false,
  setBackdrop: (payload) => {
    set(payload)
  },
}))
export default useBackdropStore
