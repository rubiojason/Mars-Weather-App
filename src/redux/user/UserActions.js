import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, MIN_WIND } from "./UserTypes"
import axios from 'axios'

export const fetchUserRequests = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

export const handleMinWind = () => {
    return {
        type: MIN_WIND,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequests)
        axios.get('https://jsonplaceholder.typicode.com/users')
        
        .then(res => {
            const users = res.data
            dispatch(fetchUsersSuccess(users))
            console.log(users + "hello")
        })
        .catch(err => {
            const errorMsg = err
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}
