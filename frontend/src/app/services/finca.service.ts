import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Finca } from '../models/finca';
import { FincaPersona } from '../models/finca-persona';
import { PersonaParentezco } from '../models/persona-parentezco';
import { FincaTrabajador } from '../models/finca-trabajador';



@Injectable()
export class FincaService {

    public urlFinca : string;
    public urlFincaP : string;
    public urlFincaT : string;
    public urlPersonaP : string;

    constructor(
        private _http: HttpClient
    ){
        this.urlFinca = 'http://127.0.0.1:3000/api/finca/';
        this.urlFincaP = 'http://127.0.0.1:3000/api/fincaPersona/';
        this.urlFincaT = 'http://127.0.0.1:3000/api/fincaTrabajador/';
        this.urlPersonaP = 'http://127.0.0.1:3000/api/personaParentezco/';

    }

    test(){
        return "Soy el servicio de fincas";
    }

    createFinca(finca): Observable<any>{
        let params = JSON.stringify(finca);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.urlFinca+'Create', params, {headers: headers});
    }

    createFincaPersona(fincaPersona): Observable<any>{
        let params = JSON.stringify(fincaPersona);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.urlFincaP+'Create', params, {headers: headers});
    }

    createPersonaParentezco(personaParentezco): Observable<any>{
        let params = JSON.stringify(personaParentezco);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.urlPersonaP+'Create', params, {headers: headers});
    }

    createFincaTrabajador(fincaTrabajador): Observable<any>{
        let params = JSON.stringify(fincaTrabajador);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.urlFincaT+'Create', params, {headers: headers});
    }

}