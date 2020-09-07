import { metadata } from 'utils/app'

const endpoints = {
  authLogin: `${metadata.baseUrl}/auth/login`,
  user: `${metadata.baseUrl}/user`
}

console.log(endpoints.currentUser)

export default endpoints
