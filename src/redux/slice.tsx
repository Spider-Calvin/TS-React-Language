import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:rootstate = {
  loading:false,
  result:[],
  words:[],
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    getWordsRequest: (state) => {
      state.loading = true
    },
    getWordsSuccess: (state, action: PayloadAction<wordtype[]>) => {
      state.loading = false;
      state.words = action.payload;
    },
    getWordsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    saveResult: (state, action: PayloadAction<string[]>) => {
      state.loading = false;
      state.result = action.payload;
    },
    clearState: (state)=>{
      state.loading = false;
      state.words = [];
      state.result = [];
      state.error = undefined;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getWordsRequest, getWordsSuccess, getWordsFail, saveResult, clearState } = rootSlice.actions

export default rootSlice.reducer