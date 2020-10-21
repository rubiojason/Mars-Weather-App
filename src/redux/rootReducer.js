import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import cookieReducer from './cookie/cookieReducer'
import reducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookie: cookieReducer,
    user: reducer,
})

export default rootReducer
