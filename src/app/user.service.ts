import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    "toto","tata","tutu"
  ]
  constructor() { }
}
