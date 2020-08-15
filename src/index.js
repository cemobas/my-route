import C from './constants'
import { routes } from './initialState.json'

console.log(`

   Vacation Route Plan
   ================
   Initially there are ${routes.length} routes in Krakow. 

   Constants (actions)
   -------------------
   ${Object.keys(C).join('\n     ')}

`)