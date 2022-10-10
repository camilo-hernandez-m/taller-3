addEventListener("DOMContentLoaded", ()=>{
    //6Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.
    //ENTRADA DE DATOS
    let temperatura=Number(prompt("coloque la temperatura"))
    let precion=Number(prompt("coloque la precion"))
    //proceso
    if (precion>200){
      console.log(`ALERTA EN LA PRECION:${precion}`)
    
    }else{
      console.log(`NORMAL EN LA PRECION:${precion}`)
    
    
    if (temperatura>100){
      console.log(`ALERTA EN LA TEMPERATURA:,${temperatura}`)
    }else{
      console.log(`NORMALEN LA TEMPERATURA:,${temperatura}`)
    }}
})