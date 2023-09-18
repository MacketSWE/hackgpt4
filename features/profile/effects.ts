import { api } from '../../utils/api'

export const signUp = async (username: string, password: string) => {
  const res = await api().post('users', { username, password })
  const json = await res.json()
  return json
}

export const signIn = async (username: string, password: string) => {
  const res = await api().post('users/login', { username, password })
  const json = await res.json()
  return json
}

export const signInWithToken = async (token: string) => {
  const res = await api().post('users/login/token', { token })
  const json = await res.json()
  return json
}

export const createGame = async (course: string) => {
  const res = await api().post('games', { course })
  const json = await res.json()
  return json
}