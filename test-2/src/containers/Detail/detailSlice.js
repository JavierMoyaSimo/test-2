import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        details: {},
        search: []
    },
    reducers: {
        addDetail: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        
    }

});

export const { addDetail } = detailSlice.actions;

export const detailData = (state) => state.detail;

export default detailSlice.reducer;