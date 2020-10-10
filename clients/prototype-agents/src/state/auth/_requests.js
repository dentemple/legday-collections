import { endpoints } from 'utils/constants'

function postAuthLogin(params) {
  const input = endpoints.authLogin
  const init = {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(input, init)
}

const requests = {
  postAuthLogin
}

export default requests
