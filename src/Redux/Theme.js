import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {value:localStorage.getItem("theme")
        ? JSON.parse(localStorage.getItem("theme"))
        : false}
    ,

    reducers: {
        Themeset: (state) => {
            state.value = !state.value;
            localStorage.setItem("theme", JSON.stringify(state.value));
            // console.log(state.value);

        },
    },
});

export const { Themeset } = ThemeSlice.actions;

export default ThemeSlice.reducer;
