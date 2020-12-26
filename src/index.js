import C from './constants'
import { routes } from './initialState.json'
import { spot, route } from './store/reducers'

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
const removeCemsRoute = {
	type: C.REMOVE_ROUTE,
	payload: {"_id": "1"}
}

const nextStateAfterAddingSkyBar = spot(undefined, addSkyBarAction)
const nextStateAfterAddingDoruksRoute = route(routes, addDoruksRoute)
const nextStateAfterRemovingCemsRoute = route(nextStateAfterAddingDoruksRoute, removeCemsRoute) // composing reducers

console.log(`
    initial state: ${JSON.stringify(state)}

    addSkyBarAction: ${JSON.stringify(addSkyBarAction)}

    addDoruksRoute: ${JSON.stringify(addDoruksRoute)}

    removeCemsRoute: ${JSON.stringify(removeCemsRoute)}

    Goal 1: Add SkyBar to spots => ${JSON.stringify(nextStateAfterAddingSkyBar)}

    Goal 2: Add Doruk's route to current routes (where there's Cem's route) ======>
    ${JSON.stringify(nextStateAfterAddingDoruksRoute)}

    Goal 3: Add Remove Cem's route from current routes (from Goal 2) ======>
    ${JSON.stringify(nextStateAfterRemovingCemsRoute)}
`)
