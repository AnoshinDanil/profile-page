export function setUsername(username) {
    return { type: 'SET_USERNAME', payload: username }
}

export function setPassword(password) {
    return { type: 'SET_PASSWORD', payload: password }
}

export function setError(error) {
    return { type: 'SET_ERROR', payload: error }
}