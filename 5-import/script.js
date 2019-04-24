//5-1 Import

import {hello} from './functions.js' //import une fonction se trouvant dans le repertoire functions.js
import {showError} from './functions.js'
import {default as anonyme} from './functions.js'
anonyme()

showError('message d\'erreur')

hello()




// 5-2 Export
const [a, b] = [7, 9]