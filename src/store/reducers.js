import C from '../constants'

export const spot = (state=[{"name": "Unknown spot", "order": 0}], action) => {

    if (action.type === C.ADD_SPOT) {
       return [...state, action.payload] // return a new array instead of changing state
    }

    return state

}

export const route = (state=[{"_id": "0", "name": "foobar route", "author": "foobar", "spots": [{"name": "FOO BAR", "order": 13}]}], action) => {

    switch(action.type) {
        case C.ADD_ROUTE:
            const hasRoute = state.some(r => r._id === action.payload._id) // if it matches specific criteria

            return (hasRoute) ?
                state :
                [...state, action.payload].sort((a, b) => a._id - b._id) // state.push is not preferred since mutating is not a good idea

        case C.REMOVE_ROUTE:
            return state.filter((r, i) => r._id !== action.payload._id)

        default:
            return state
    }

}
