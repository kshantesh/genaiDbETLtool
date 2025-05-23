  
  import { create } from 'zustand'
import type { ResponseProps } from '../chatResponse/ResponseProps'
  
interface MessageStore {
    messages: ResponseProps[]
    addMessage: (msg: ResponseProps) => void
    setMessages: (msgs: ResponseProps[]) => void
    clearMessages: () => void
}

export const useMessageStore = create<MessageStore & { getMessages: () => ResponseProps[] }>((set, get) => ({
    messages: [],
    addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
    setMessages: (msgs) => set({ messages: msgs }),
    clearMessages: () => set({ messages: [] }),
    getMessages: () => get().messages,
}))