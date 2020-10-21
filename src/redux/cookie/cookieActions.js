import { BUY_COOKIE, TEMP } from './cookieTypes'

export const buyCookie = () => {
    return {
        type: BUY_COOKIE,
    }
}

export const setTemp = () => {
    return {
        type: TEMP,
    }
}
