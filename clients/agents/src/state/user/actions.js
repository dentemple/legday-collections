import { createAsyncThunk } from '@reduxjs/toolkit'

import { rejectRequestWithError } from 'utils/app'

export const fetchUserLogin = createAsyncThunk('user/auth/login', async function (_, { rejectWithValue }) {
  try {
    const module = await import('utils/mocks/user')
    const json = module.default

    return json
  } catch (err) {
    console.log(err)
    return rejectRequestWithError({ rejectWithValue })
  }
})

const actions = {
  fetchUserLogin
}

export default actions
