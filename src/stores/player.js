import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: false,
    controls: false,
    playing: false,
    sidebarCurrent: false
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setControls: (state, action) => {
            state.controls = action.payload
        },
        setPlaying: (state, action) => {
            state.playing = action.payload
        },
        setSidebarCurrent: (state, action) => {
            state.sidebarCurrent = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setCurrent,
    setControls,
    setPlaying,
    setSidebarCurrent } = playerSlice.actions

export default playerSlice.reducer