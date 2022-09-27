import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import menuReducer from './menu/menuReducer'



const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['menu']
}
const rootReducer = combineReducers({  //aca van los diferentes reducers que se combinan
    menu: menuReducer,
})

export default persistReducer(persistConfig, rootReducer)