import {configureStore} from '@reduxjs/toolkit'
import Notereducer from './Noteslice'


export const Store = configureStore({
    reducer:{
        note:Notereducer

    }
})


export default Store;