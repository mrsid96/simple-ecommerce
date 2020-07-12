const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER',
    payload: null
});

export {
    setCurrentUser,
    removeCurrentUser
}