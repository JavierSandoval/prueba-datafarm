import { Component, OnInit } from '@angular/core';
import { Trabajador} from '../../models/trabajador';
import { TrabajadorService } from '../../services/trabajador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css'],
  providers: [TrabajadorService]
})
export class EmployeesFormComponent implements OnInit {

  public trabajador : Trabajador;
  public status: string;

  constructor(
    private _trabajadorService: TrabajadorService
  ) { 
    this.trabajador = new Trabajador(null,'','','','',null);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this._trabajadorService.create(this.trabajador).subscribe(
      response  => {
        this.trabajador = response.trabajador;
        Swal.fire(
          'Registrado!',
          'El trabajador se ha registrado correctamente en el sistema!',
          'success'
        );
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

}
