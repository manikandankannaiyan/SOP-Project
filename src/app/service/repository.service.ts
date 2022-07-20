import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getdata(data:any):Observable<any>{
    return this.http.post<any>(environment.apirootURL+'repository-list/', data,{headers:{'Authorization':'Token 0aeb15de83ef6fb02695f2ce0d99374046f32eb9'}});
  }
}
