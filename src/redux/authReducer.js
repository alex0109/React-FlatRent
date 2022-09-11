const CREATE_USER = 'CREATE_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOG_OUT = 'LOG_OUT';

let initialState = {
    users: [
        {
            userID: 0,
            login: 'alex.slep007@gmail.com',
            username: 'krossby',
            password: '12345678'
        }
    ],
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                isAuth: true,
                users: [{
                    userID: action.payload.userID,
                    login: action.payload.login,
                    username: action.payload.username,
                    password: action.payload.password
                }, ...state.users]
            }
        case LOGIN_USER:
            let findUser = state.users.filter(user => user.login === action.payload.login && user.password === action.payload.password)
            if(!findUser[0].login) {
                return state
            } else {
                return {...state, isAuth: true, findUser}
            }
        case LOG_OUT:
            return {...state, isAuth: false}
        default:
            return state;
    }
}

export const setAuthUserAction = (userID, login, username, password) => ({
    type: CREATE_USER,
    payload: {userID, login, username, password}
})

export const setLoginUserAction = (login, password) => ({
    type: LOGIN_USER,
    payload: {login, password}
})

export const setLogOutUserAction = () => ({
    type: LOG_OUT
})

export default authReducer;