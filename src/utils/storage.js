const TOKEN_KEY = 'btk'
export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  return localStorage.removeItem(TOKEN_KEY)
}

const USER_INFO_KEY = 'bui'
export function setUserInfo(userInfo) {
  return localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo || '{}'))
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY)) || {}
}
