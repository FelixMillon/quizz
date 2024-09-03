import { Component } from '@angular/core';
import { QuizzService } from '../quizz.service';
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent {
  constructor(
    private quizzService: QuizzService
  ) {}
  result = this.quizzService.score
  // result = 5
  mention = this.getMention()
  getMention(): string{
    if(typeof this.result === 'number'){
      if(this.result == 10){
        return "excellent"
      }else if(this.result >= 7.5){
        return "bon"
      }else if(this.result >= 5){
        return "moyen"
      }else if(this.result >= 2.5){
        return "mauvais"
      }else if(this.result < 2.5){
        return "nul"
      }
    }
    return "undefined"
  }
}
