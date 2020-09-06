import { createAsyncThunk } from '@reduxjs/toolkit'

import { rejectRequestWithError } from 'utils/app'

export const fetchUserLogin = createAsyncThunk('user/auth/login', async function (_, { rejectWithValue }) {
  try {
    const module = await import('utils/mocks/user')
    return module.default
  } catch (_) {
    return rejectRequestWithError({ rejectWithValue })
  }
})

export default {
  fetchUserLogin
}
