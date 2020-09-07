import { endpoints } from 'utils/constants'

function getCurrentUser() {
  const input = endpoints.user
  const init = {
    credentials: 'include'
  }

  return fetch(input, init)
}

const requests = {
  getCurrentUser
}

export default requests
