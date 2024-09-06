import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private translateService: TranslateService,
  ) { 

  }
  langages = ["en", "fr"]
  selectedLangage = "en"
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

  changeLangage(): void {
    this.translateService.use(this.selectedLangage);
  }
}
