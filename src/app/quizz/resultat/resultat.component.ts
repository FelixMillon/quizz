import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  constructor(
    private quizzService: QuizzService
  ) {}

  ngOnInit() {
    this.quizzService.scoreSubject?.subscribe(score => {
      this.result = score;
      this.mention = this.getMention(score);
    });
  }
  result = this.quizzService.score
  date? : Date
  mention = "undefined"
  getMention(score: number): string{
    this.result = this.quizzService.score
    this.date = new Date()
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
