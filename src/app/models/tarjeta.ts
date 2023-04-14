export class TarjetaCredito{
     id?: string; // Data opcional a llenar o instanciar
     titular:string;
     numeroTarjeta:string;
     cvv:number;
     fechaCreacion:Date;
     fechaActualizacion:Date;
     fechaExpiracion:Date;
    constructor(t:string,nT:string, c:number){
        this.titular = t;
        this.numeroTarjeta = nT;
        this.cvv = c;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
        this.fechaExpiracion= new Date();
    }
}