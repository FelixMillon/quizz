import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ) { }
  name: string | null = this.getName()
  getName(): string | null {
    if(this.userService.isConnected()){
      return this.userService.getName()
    }else{
      return null
    }
  }
  
  disconnect(): void {
    this.userService.disconnect()
  }
}
