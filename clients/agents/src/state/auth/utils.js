function whitelistLogin({ username, password }) {
  return {
    username,
    password
  }
}

const utils = {
  whitelistLogin
}

export default utils
