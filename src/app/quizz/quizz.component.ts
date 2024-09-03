import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
  constructor(
    private router: Router,
    private quizzService: QuizzService
) { }
  questionnaire = this.quizzService.questionnaire
  userAnswers = this.quizzService.userAnswers
  score = this.quizzService.score
  calculateScore(){
    this.quizzService.calculateScore()
  }
  resetAnswers(){
    this.quizzService.resetAnswers()
  }
  addResponse(key: number, resp: string){
    this.quizzService.addResponse(key,resp)
  }
  redirectToResult() {
    this.router.navigate(['/resultat']);
  }
}
