import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apiURL: string = 'https://liquiditydigital.appspot.com';
  apiURL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

public login(userCredentials){
    return this.httpClient.post(`${this.apiURL}/login`,userCredentials);
}  
public logout(){
  return this.httpClient.get(`${this.apiURL}/logout`);
}
public getUsers(){
    return this.httpClient.get(`${this.apiURL}/users`,httpOptions);
}

public deleteUser(email){
  return this.httpClient.delete<any[]>(`${this.apiURL}/users?email=${email}`);
}

public updateUser(user){
  return this.httpClient.put<any[]>(`${this.apiURL}/users`,user);
}

public createUser(user){
  return this.httpClient.post<any[]>(`${this.apiURL}/users`,user);
}


}