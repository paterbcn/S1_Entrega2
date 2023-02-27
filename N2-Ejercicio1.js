/*Crea una arrow function que, rebent un paràmetre, retorni un objecte
 amb un atribut que tingui com a valor el paràmetre rebut.*/

const persona = (nom => {
    const Datos ={ nombre :nom , nick: nom.replace(" ","").toLowerCase() + nom.length}
    return Datos})("juan Garcia")



