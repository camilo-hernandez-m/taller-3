addEventListener("DOMContentLoaded", ()=>{
//5Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos
//entrada de datos 
let area=int(input(" coloque el area de un triangulo:"))
if (area>0){
  let   res=(area*area)
  console.log("el area de el rectangulo es de :",res)
}else{
  console.log("escriba un valor positivo")
}
})