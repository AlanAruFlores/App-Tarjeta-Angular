import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjeta';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    /*Aca estamos realizando las validacion del fomulario, construimos un formulario reactivo instanciando la variable 'form:FormGroup' */
    this.form = this.fb.group({
      titular:["",Validators.required],
      nroTarjeta:["",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion:["",[Validators.required,Validators.minLength(5),Validators.minLength(5),Validators.pattern("[0-9][0-9]/[0-9][0-9]")]],
      cvv : ["",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  crearTarjeta(){
    // console.log(this.form);
    const tarjetaNueva : TarjetaCredito = {
        titular:this.form.value.titular,
        numeroTarjeta: this.form.value.nroTarjeta,
        cvv: this.form.value.cvv,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        fechaExpiracion: this.form.value.fechaExpiracion
    };
    console.log(tarjetaNueva);

  }
}
