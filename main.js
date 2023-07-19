//FUNCIONES

function ComprarTortas (){

    let tortaId = 0

    //Null es un dato primitivo que sirve para validar ingreso de datos como verdadero o falso
    let tortaSeleccionada = null
    

while(!tortaSeleccionada){

tortaId = parseInt(prompt

    ("Bienvenido a Finca La Lili. Que torta desea comprar?:\n"+
"1 : Cheesecake ($700)\n"+
"2 : Tarta de Manzana ($600)\n"+
"3 : Lemon Pie ($5000)\n"+
"4 : Torta de Chocolate ($800)\n"+
"5 : Torta de ricota ($400)"


))

//Este método (find) es el encargado de encontrar en la base de datos lo que ingresa el usuario
tortaSeleccionada = tortas.find(torta => torta.id === tortaId)
}


//Este bucle while dice que si cantidad de tortas no existe o es cero no va a ingresar al prompt
let cantidadTortas = 0
while(!cantidadTortas || cantidadTortas===0){

cantidadTortas = parseInt(prompt ("Torta elegida :" + tortaSeleccionada.nombre + "\nIntroduzca la cantidad deseada (solo números :)"))
if (!tortaSeleccionada) {
    const confirmarOtraTorta = confirm("La opción seleccionada no es válida. ¿Desea elegir otra torta?")
    if (!confirmarOtraTorta) {
      return null; // El usuario no desea elegir otra torta, se devuelve null para cancelar la compra.
    }
  }

}

// Este constructor se realizó para poder usar los métodos de la clase pedido y el return permite poder usar pedido y sus métodos fuera de la función Compras. No es una buena práctica que las funciones realicen múltiples tareas.
const pedido = new Pedido (tortaSeleccionada.nombre, tortaSeleccionada.precio,cantidadTortas)
return pedido

}

//Invocación de métodos de la clase Pedido
const pedido = ComprarTortas()
pedido.calcularsubtotal()
pedido.calcularEnvio()
pedido.calculartotal()

  alert (`Detalle del pedido:
  ${pedido.torta} * ${pedido.cantidad}: $${pedido.subtotal}
  IVA 21% : $${pedido.calcularIva()}
  Costo de envío: $${pedido.envio}
  Total = $${pedido.total}
  Muchas Gracias por su compra!`)



