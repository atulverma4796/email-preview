// src/store/emailSlice.js
import { createSlice } from "@reduxjs/toolkit"

const emailSlice = createSlice({
  name: "email",
  initialState: {
    subject1: "",
    subject2: "",
    previewText: "",
  },
  reducers: {
    updateSubject1: (state, action) => {
      state.subject1 = action.payload
    },
    updateSubject2: (state, action) => {
      state.subject2 = action.payload
    },
    updatePreviewText: (state, action) => {
      state.previewText = action.payload
    },
  },
})

export const { updateSubject1, updateSubject2, updatePreviewText } =
  emailSlice.actions
export default emailSlice.reducer
