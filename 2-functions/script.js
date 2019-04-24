//2.1 Fonctions simples

const sayHello = () => console.log('Hello');

const sayMyName = (first, last) => console.log(first, last);

const sayMyAge = (age) => console.log('You are ' + age + ' years old');

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {
        console.log(this)
    }
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