//2.1 Fonctions simples

const sayHello = () => console.log('Hello');

const sayMyName = (first, last) => console.log(first, last);

const sayMyAge = (age) => console.log('You are ' + age + ' years old');

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = { // création d' un objet avec une variable constante (que l'on ne doit pas modifier !!)  
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: () => console.log(object)//Deux facteurs sont à l’origine de la conception des fonctions fléchées : une syntaxe plus courte et l’absence de this spécifique à la fonction
    
}

object.showThis()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    //sayHello: ...
    //sayMyName:...
    //sayMyAge:...
}

//odile.sayHello()
//odile.sayMyName()
//odile.sayMyAge()