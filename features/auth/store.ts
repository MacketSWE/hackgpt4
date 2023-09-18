import create from 'zustand'
import { setToken } from '../../utils/api'
import { createGame, signIn, signInWithToken, signUp } from './effects'

type State = {
  user: any | null
  token: string | null
  status: null | 'pending'
  logOut: () => void
  signUp: (username: string, password: string) => void
  signIn: (username: string, password: string) => void
  signInWithToken: (token: string) => void
  createGame: (course: string) => void
}

export const useAuthStore = create<State>((set) => ({
  user: null,
  token: null,
  status: null,
  signUp: async (username, password) => {
    try {
      const { user, token } = await signUp(username, password)
      await localStorage.setItem('token', JSON.stringify(token))
      setToken(token)
      set({ user, token })
    } catch (error) {
      console.log(error, '<--- error signing up')
    }
  },
  signIn: async (username, password) => {
    try {
      const { user, token } = await signIn(username, password)
      if(user && token){
        await localStorage.setItem('token', JSON.stringify(token))
        setToken(token)
        set({ user, token })
      }
    } catch (error) {
      console.log(error, '<--- error signing in')
    }
  },
  signInWithToken: async (t) => {
    try {
      const { user, token } = await signInWithToken(t)
      if(user && token){
        setToken(token)
        set({ user, token })
      }
    } catch (error) {
      console.log(error, '<--- error signing in with token')
    }
  },
  logOut: async () => {
    await localStorage.removeItem('token')
    set({ user: null, token: null})
  },
  createGame: async (course) => {
    try {
       const res = await createGame(course)
       console.log(res, '<--- res create game')
    } catch (error) {
      console.log(error, '<--- error creating game')
    }
  }
}))

const init = () => {
  // Try to sign in with token
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      useAuthStore.getState().signInWithToken(token)
    } else {
      console.log('Signed out')
    }
  }
}
init()
