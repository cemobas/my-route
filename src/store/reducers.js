import C from '../constants'

export const spot = (state=[{"name": "Unknown spot", "order": 0}], action) => {

   if (action.type === C.ADD_SPOT) {
       state.push(action.payload)
   }

   return state

}

export const route = (state={"_id": "0", "name": "foobar route", "author": "foobar", "spots": [{"name": "FOO BAR", "order": 13}]}, action) => {

   if (action.type === C.ADD_ROUTE) {
        state.push(action.payload)
   }
   
   return state

}
