import { Injectable } from '@angular/core';
import { User } from "./types"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  name = ""
  register(user: User){
    if(typeof(user.password) != "string"){
      throw new Error()
    }
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
  }
  checkPassword(password: string): boolean{
    if(password == localStorage.getItem("password")){
      return true
    }
    return false
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
