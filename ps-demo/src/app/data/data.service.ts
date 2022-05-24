import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm (userData: UserData): Observable<any>{
    return this.http.post('https://putsreq.com/GaTpGdCampeyNI9U8V61', userData);
    
    //return of(userData);
  }
}
