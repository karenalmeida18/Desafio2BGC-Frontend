export function setLogin(data) {
  return {
    type: "SET_LOGIN",
    data
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}