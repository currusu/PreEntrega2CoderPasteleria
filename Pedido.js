class Pedido{

    //Constructor con parámetros necesarios de pedido asi poder crear las funciones
    constructor(torta,precio,cantidad,envio,subtotal,total){

        this.torta =  torta
        this.precio = precio
        this.cantidad = cantidad
        this.envio = 0
        this.subtotal = 0
        this.total = 0
    }

    //Método para calcular subtotal
    calcularsubtotal (){
        this.subtotal = this.precio * this.cantidad

    }

    //Método para calcular IVA

    calcularIva (){

       return this.subtotal * 0.21
    }

    //Método para calcular envío
    calcularEnvio(){

        if(this.subtotal>=2000){
            this.envio = 0
        }else{
            this.envio = 700
        }

    }
    
    //Método para calcular total

    calculartotal (){

        this.total = this.subtotal + this.envio + this.calcularIva()
    }
}
