import { USER_LOGGED_IN } from '../contants'

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user
        default:
            return state
    }
}