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

/*var dep = ["ventas", "compras","finanzas"]
Var non = ["Juan Garcia", "Laura perez", "Maria Garcia"] 
Var puestos = ["Adminstrativo", "comercial", "manager"]
Var email = ["jg@email.com","lp@email.com","mag@email.com"]
*/



console.log(empleadomg)





/*class Usuario {
    constructor (nombre ,email , password){
        this.nombre = nombre
        this.email = email
        this.password= password
    }

    saludo(){
        console.log(`hola , soy ${this.nombre}`);
       }
    login(email, password){
        return this.email ===email && this.password === password;
    }
}

if(this.constructor == User){
           throw new Error ("objeto de clase abstracta , no puede ser creado") 
        }
    }

class Alumno extends Usuario{
    constructor(nombre,email,password){
        super(nombre,email,password)
        this.cursos = []
    }

    despedida(){
        console.log(`hasta luego ${this.nombre}`);
    }


}


const pablo = new Usuario("pablo","pabl@gmail.com","pablo123");
const jose = new Alumno("jose","jose@gmail.com","jose123");

console.log(pablo)
console.log(jose);
*/
