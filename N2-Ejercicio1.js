/*Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.*/

const persona = nom => {
    const Datos ={ "nombre": nom,"sexo":"h"}
    return Datos
}

var sexo = persona("agusin")
console.log(sexo.nombre)
