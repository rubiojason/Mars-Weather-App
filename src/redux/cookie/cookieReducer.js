import { BUY_COOKIE, TEMP } from './cookieTypes'

const initialState = {
    numOfCookies: 15,
    temp: 100,
}

const cookieReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_COOKIE: return {
            ...state,
            numOfCookies: state.numOfCookies - 1
        }
        case TEMP: return {
            ...state,
            temp: state.temp + 50
        }
        default: return state
    }
}

export default cookieReducer
