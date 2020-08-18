import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {

    public url : string;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'http://127.0.0.1:3000/api/persona/'
    }

    test(){
        return "Soy el servicio de personas";
    }

    create(persona): Observable<any>{
        let params = JSON.stringify(persona);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'Create', params, {headers: headers});
    }

}

