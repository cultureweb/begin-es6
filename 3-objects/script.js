//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}


for (let key in bus) { //Afficher les carractéristiques du véhicule sours la forme clé : valeur (Ex: id: 3221)
 let value = bus [key];
 console.log(key + " :  " + value)
}


//3.2 Object.values

console.log(data)