import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class UserService {
   
   private _url = './db/db.json';

   constructor(private _hhtp: HttpClient){}

   getUserDB(): Observable<any> {
      return this._hhtp.get<any>(this._url);
   }


}