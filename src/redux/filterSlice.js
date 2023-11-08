const { createSlice } = require("@reduxjs/toolkit");


const initialFilterState = { value: ''};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        changeFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;