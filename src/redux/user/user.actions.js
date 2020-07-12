import { userActionTypes } from "./user.types"

const setCurrentUser = user => ({
    type: userActionTypes.setCurrentUser,
    payload: user
});

const removeCurrentUser = () => ({
    type: userActionTypes.removeCurrentUser,
    payload: null
});

export {
    setCurrentUser,
    removeCurrentUser
}