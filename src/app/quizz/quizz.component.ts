import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../services/quizz.service';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent{
  constructor(
    private router: Router,
    private quizzService: QuizzService,
) {}

// faire getter coté service
// subscribe ici pour maj questionnaire
  startDate = new Date()
  questionnaire = this.quizzService.questionnaire

  userAnswers = this.quizzService.userAnswers
  score = this.quizzService.score

  async calculateScore(){
    this.quizzService.calculateScore()
  }
  resetAnswers(){
    this.quizzService.resetAnswers()
  }

  async redirectToResult() {
    await this.quizzService.calculateScore()
    this.router.navigate(['/resultat']);
  }

}
