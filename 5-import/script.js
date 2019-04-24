//5-1 Import

import {hello} from './functions.js' //import une fonction se trouvant dans le repertoire functions.js
import {showError} from './functions.js'
//import {default as anonyme} from './functions.js'
import * as math from './math.js'


//anonyme()

showError('message d\'erreur')

hello()




// 5-2 Export
const [a, b] = [7, 9]

console.log(math.sum(a, b))
console.log(math.sub(a, b))
console.log(math.multiply(a, b))
console.log(math.divide(a, b))
console.log(math.pow(a, b))