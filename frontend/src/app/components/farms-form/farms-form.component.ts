import { Component, OnInit } from '@angular/core';
import { Finca } from '../../models/finca';
import { FincaPersona } from '../../models/finca-persona';
import { PersonaParentezco } from '../../models/persona-parentezco';
import { FincaTrabajador } from '../../models/finca-trabajador';
import { FincaService } from '../../services/finca.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-farms-form',
  templateUrl: './farms-form.component.html',
  styleUrls: ['./farms-form.component.css'],
  providers: [FincaService]
})
export class FarmsFormComponent implements OnInit {

  public finca: Finca;
  public fincaTrabajador: FincaTrabajador;
  public fincaPersona: FincaPersona;
  public personaParentezco: PersonaParentezco;
  public status: string;

  constructor(
    private _fincaService: FincaService
  ) {
    this.finca = new Finca(null,'',null,null,null,null);
    this.fincaPersona = new FincaPersona(null,null);
    this.personaParentezco = new PersonaParentezco(null,null,null);
    this.fincaTrabajador = new FincaTrabajador(null,null);
   }

  ngOnInit(): void {
  }

  onSubmitFinca(){

    this._fincaService.createFinca(this.finca).subscribe(
      response  => {
        this.finca = response.finca;
        Swal.fire(
          'Registrado!',
          'Has registrado correctamente una finca en el sistema!',
          'success'
        );
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  onSubmitFincaPersona(){
    this.fincaPersona.id_finca = this.finca.id_finca;
    this._fincaService.createFincaPersona(this.fincaPersona).subscribe(
      response => {
        this.fincaPersona = response.fincaPersona;
      },
      error => {
        console.log(error);
      }
    );

  }

  onSubmitFincaTrabajador(){

  }
}
