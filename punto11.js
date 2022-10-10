addEventListener("DOMContentLoaded", ()=>{
    //11Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación.
    //ENTRADA DE DATOS
    let nombre=(prompt("ingrese su nombre:"))
    let apellido=(prompt("ingrese su apellido:"))
    let edad=(prompt("ingrese su eddad:"))
    
    let not1=Number(prompt("dijite su nota 1:"))
    let not2=Number(prompt("dijite su nota 2:"))
    let not3=Number(prompt("dijite su nota 3:"))
    let not4=Number(prompt("dijite su nota 4:"))
    let not5=Number(prompt("dijite su nota 5:"))
    
    let prom=(not1+not2+not3+not4+not5)/5
    if (prom >=5){
      console.log("aprobaado")
    }else{
      console.log("no aprobado")
    console.log("promedio de las notas :",prom)
    }
})