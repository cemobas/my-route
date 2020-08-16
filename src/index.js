import C from './constants'
import { routes } from './initialState.json'
import { spot } from './store/reducers'

const state = {
    "routes": [{
        "_id": "1",
        "spots": [
            {"name": "Birader Doner", "order": 1}
        ],
        "author": "cemobas",
        "name": "CemsRoute"
    }]
};

const addSkyBarAction = {
	type: C.ADD_SPOT,
	payload: {"name": "SKY BAR", "order": 99}
}
const addDoruksRoute = {
	type: C.ADD_ROUTE,
	payload: {"_id": "11", "name": "DoruksRoute", "author": "doruk", "spots": [{"name": "SKY BAR", "order": 99}]}
}

const nextStateAfterAddingSkyBar = spot(state, addSkyBarAction)
const nextStateAfterAddingDoruksRoute = spot(state, addDoruksRoute)

console.log(`
    initial goal: ${state}
    addSkyBarAction: ${JSON.stringify(addSkyBarAction)}
    addDoruksRoute: ${JSON.stringify(addSkyBarAction)}
    new goal 1: ${JSON.stringify(nextStateAfterAddingSkyBar)}
    new goal 2: ${JSON.stringify(nextStateAfterAddingDoruksRoute)}
`)