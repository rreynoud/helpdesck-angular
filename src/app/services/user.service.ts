import { HELP_DESCK_API } from './helpdesck.api';
import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(`${HELP_DESCK_API}/api/auth`, user);
  }

  createOrUpdate(user: User){
    if(user.id != null && user.id != '' ){
      return this.http.put(`${HELP_DESCK_API}/api/user`, user);
    }else{
      return this.http.post(`${HELP_DESCK_API}/api/user`, user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${HELP_DESCK_API}/api/user/${page}/${count}`);
  }

  findById(id: string){
    return this.http.get(`${HELP_DESCK_API}/api/user/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${HELP_DESCK_API}/api/user/${id}`);
  }


}


