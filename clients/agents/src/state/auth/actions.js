import { createAsyncThunk } from '@reduxjs/toolkit'

/* state */
import requests from './_requests'
import stateUtils from './utils'

/* utils */
import { rejectRequestWithError } from 'utils/app'

export const fetchLogin = createAsyncThunk('request/auth/login', async function (params, thunkAPI) {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await requests.postAuthLogin(stateUtils.whitelistLogin(params))

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
  fetchLogin
}

export default actions
