/*Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions.*/

class Staff {
    constructor(departamento){
        if(this.constructor == Staff){
            throw new Error ("objeto de clase abstracta , no puede ser creado") 
         }
         this.departamento = departamento
        }

  
}

class Empleado extends Staff{
    constructor(departamento , name , puesto , email){
        super(departamento)
        this.name = name
        this.puesto = puesto
        this.email = email
    }
    }

var empleadojg = new Empleado("ventas","Juan Garcia","Adminstrativo","jg@email.com")
var empleadolp = new Empleado("compras","Laura perez","director","lp@email.com")
var empleadomg = new Empleado("finanzas","Maria Garcia","manager","mag@email.com")

