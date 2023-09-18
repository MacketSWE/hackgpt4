/* global HeadersInit */

export const baseUrl = 'http://localhost:8000'

// FIXME: 'token' shouldn't be a global variable
let token: string | null

const setToken = (newToken: string | null) => {
  console.log('Setting API token')
  token = newToken
}

const withToken = (headers: Object) =>
  token ? { ...headers, Authorization: `Bearer ${token}` } : headers

const getHeaders = () =>
  withToken({
    'CC-App-Version': '3.0',
    'Content-Type': 'application/json'
  })

const api = () => ({
  post: async (path: string, params: object = {}, headers = {}) =>
    fetch(`${baseUrl}/${path}`, {
      method: 'POST',
      headers: { ...getHeaders(), ...headers } as HeadersInit,
      body: JSON.stringify(params)
    }),
  patch: async (path: string, params: object = {}) =>
    fetch(`${baseUrl}/${path}`, {
      method: 'PATCH',
      headers: getHeaders() as HeadersInit,
      body: JSON.stringify(params)
    }),
  get: async (path: string, params: any = {}) => {
    const queryString = new URLSearchParams(params).toString()
    return fetch(`${baseUrl}/${path}?${queryString}`, {
      method: 'GET',
      headers: getHeaders() as HeadersInit
    })
  },
  delete: async (path: string) =>
    fetch(`${baseUrl}/${path}`, {
      method: 'DELETE',
      headers: getHeaders() as HeadersInit
    })
})

export { setToken, api }
