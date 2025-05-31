import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({

    name:'app',
    initialState : {

        isMenuOpen: false
    },
    reducers : {

        toggleSidebarMenu: (state) => {

            state.isMenuOpen = !state.isMenuOpen
     },

      closeSidebarMenu: (state) => {

        state.isMenuOpen = false;
      }
    }
})
 
export const {toggleSidebarMenu, closeSidebarMenu} = appSlice.actions;
export default appSlice.reducer;