import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../types"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private httpClient:HttpClient ) { }
  name = ""

  register(user: User){
    if(typeof(user.password) != "string"){
      throw new Error()
    }
    this.httpClient.post<User>('http://localhost:3000/users', user).subscribe();;
  }
  login(user: User){
    if(typeof(user.password) != "string"){
      throw new Error()
    }
    return this.httpClient.get<User>('http://localhost:3000/users?username=' + user.email + '&password=' + user.password);
  }
  getName(){
    const name =  localStorage.getItem("name")
    if(typeof(name) == 'string'){
      this.name = name
    }
    return name
  }
  connect(){
    localStorage.setItem('connected', "true");
    const name =  localStorage.getItem("name")
    if(typeof(name) == 'string'){
      this.name = name
    }
  }
  disconnect(){
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('connected');
  }
  isConnected(): boolean{
    if(localStorage.getItem("connected") == "true"){
      return true
    }
    return false
  }
}
