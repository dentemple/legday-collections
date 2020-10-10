import { createAsyncThunk } from '@reduxjs/toolkit'

/* state */
import requests from './_requests'

/* utils */
import { rejectRequestWithError } from 'utils/app'

export const fetchCurrentUser = createAsyncThunk('user/auth/login', async function (_, thunkAPI) {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await requests.getCurrentUser()

    switch (res.status) {
      case 200:
        return await res.json()

      default:
        return rejectRequestWithError({ rejectWithValue })
    }
  } catch (err) {
    return rejectRequestWithError({ rejectWithValue })
  }
})

const actions = {
  fetchCurrentUser
}

export default actions
