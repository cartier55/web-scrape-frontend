import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const startScrape = createAsyncThunk({

})

const initialState = {
    pageName: '',
    postCount: 10,
    proxyUrl: '',
    proxyPort: '',
    proxyToken: '',
    username: '',
    status: 'idle',
    errors: [],
    data: [],
  };

  export const scrapeSlice = createSlice({
    name:'scrape',
    initialState,
    reducers:{
        setProxyParams:(state,action) =>{
            state.proxyUrl = action.payload.proxyUrl
            state.proxyPort = action.payload.proxyPort
            state.proxyToken = action.payload.proxyToken
        },
        setUsername: (state,action)=>{
            state.username = action.payload
        }

    },
    extraReducers:{
        [startScrape.pending]:(state,action)=>{
            state.status = 'loading'
            state.username = action.payload
        },
        [startScrape.fulfilled]:(state,action)=>{
            state.status = 'success'
            state.data = action.payload
        },
        [startScrape.rejected]:(state,action)=>{
            state.status = 'failed'
            state.errors = action.payload
        },
    }

  })

export const {setProxyParams, setUsername} = scrapeSlice.actions
export default scrapeSlice.reducer;
