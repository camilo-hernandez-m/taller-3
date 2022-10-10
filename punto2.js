addEventListener("DOMContentLoaded", ()=>{
    //calcule el numero mayor de tres numero
    let num1 = Number(prompt(`primer numero: `))
    let num2 = Number(prompt(`segundo numero: `))
    let num3 = Number(prompt(`tercer numero: `))
    
    if (num1>num2 & num1>num3) 
      console.log(`numero uno es mayor:`)
    if (num2>num3 & num2>num1){ 
      console.log(`el dos es mayor`)
    }else{
    console.log(`el numero tres es mayor`)
    }
})