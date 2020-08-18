import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
  providers: [PersonaService]
})
export class PeopleFormComponent implements OnInit {

  public persona: Persona;
  public status: string;

  constructor(
    private _personaService: PersonaService
  ) { 
    this.persona = new Persona(null,'','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this._personaService.create(this.persona).subscribe(
      response  => {
        this.persona = response.persona;
        Swal.fire(
          'Registrado!',
          'Te has registrado correctamente en el sistema!',
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
