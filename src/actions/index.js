export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}
export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}
export const multiply = (nr) => {
    return {
        type: 'MULTIPLY',
        payload: nr
    }
}
export const divide = (nr) => {
    return {
        type: 'DIVIDE',
        payload: nr
    }
}