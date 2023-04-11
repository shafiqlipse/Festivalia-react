import { createSlice } from "@reduxjs/toolkit";

export const ToggleSlice = createSlice({
    name: "toggle",
    initialState:
        {value:false}
    ,

    reducers: {
        MobileMenu: (state) => {
            state.value = !state.value;
            console.log(state.value);

        },
    },
});

export const { MobileMenu } = ToggleSlice.actions;

export default ToggleSlice.reducer;
