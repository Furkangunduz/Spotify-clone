import { configureStore } from '@reduxjs/toolkit'
import player from "stores/player"

export default configureStore({
    reducer: {
        player
    }
})

