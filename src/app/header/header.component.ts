import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ) { }
  name = this.getName()
  getName(){
    if(this.userService.isConnected()){
      return this.userService.getName()
    }else{
      return null
    }
  }
  
  disconnect(){
    this.userService.disconnect()
  }
}
