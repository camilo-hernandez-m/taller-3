addEventListener("DOMContentLoaded", ()=>{
    //9Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    // ENTRADA DE DATOS 
    // let prod=1
    // let total=0
    // let num=Number(prompt(`dijite  un numero`))
    // for i Range(`${0, num + 1}`)
    // if (num % 2 == 0){
    //   console.log (`+=num `)
    //   } if (num % 2 !=0){
    //   console.log (`*=num`)
    //   }

    let par = 0, impa = 1;
    while(confirm(`Desea ingresar otro numero`)){
        let num=Number(prompt(`dijite  un numero`))
        eval(`${(num%2 == 0) ? "par+=num" : "impa*=num"}`);
    }
    alert(`La suma de los pares es: ${par}\nEl producto de los impares es: ${impa}`);
})