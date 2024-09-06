import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../types"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private httpClient:HttpClient ) { }
  name = ""

  register(user: User): void {
    if(typeof(user.password) != "string"){
      throw new Error()
    }
    this.httpClient.post<User>('http://localhost:3000/users', user).subscribe();
  }
  login(user: User): Observable<User> {
    if(typeof(user.password) != "string"){
      throw new Error()
    }
    return this.httpClient.get<User>('http://localhost:3000/users?username=' + user.email + '&password=' + user.password);
  }
  getName(): string | null {
    const name =  localStorage.getItem("name")
    if(typeof(name) == 'string'){
      this.name = name
    }
    return name
  }
  connect(): void {
    localStorage.setItem('connected', "true");
    const name =  localStorage.getItem("name")
    if(typeof(name) == 'string'){
      this.name = name
    }
  }
  disconnect(): void {
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('connected');
  }
  isConnected(): boolean {
    if(localStorage.getItem("connected") == "true"){
      return true
    }
    return false
  }
}
