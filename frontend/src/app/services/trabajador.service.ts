import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable()
export class TrabajadorService {

    public url : string;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'http://127.0.0.1:3000/api/trabajador/'
    }

    test(){
        return "Soy el servicio de trabajadores";
    }

    create(trabajador): Observable<any>{
        let params = JSON.stringify(trabajador);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'Create', params, {headers: headers});
    }

}