import { createSlice } from '@reduxjs/toolkit'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    authUser: null,
  },
  reducers: {
    login(state, action){
      state.isLoggedIn = true
    },
    setAuthUser(state, action) {
      state.authUser = action.payload
    },
  },
})

export const { login, setAuthUser } = authSlice.actions
export default authSlice.reducer
