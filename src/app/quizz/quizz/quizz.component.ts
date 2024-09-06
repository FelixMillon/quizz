import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../quizz.service';
import { ConfirmComponent } from '../../shared/popup/confirm/confirm.component';
import { Question, Response } from '../../types';
import { Observable } from 'rxjs';
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
  @ViewChild(ConfirmComponent) popup!: ConfirmComponent;

// faire getter coté service
// subscribe ici pour maj questionnaire
  startDate = new Date()
  questionnaire: Observable<Question[]> = this.quizzService.questionnaire

  userAnswers: Response = this.quizzService.userAnswers
  score: number | undefined = this.quizzService.score
  validate: boolean = false

  async calculateScore(){
    this.quizzService.calculateScore()
  }
  resetAnswers(){
    this.quizzService.resetAnswers()
  }
  async getResponse(response: boolean){
    this.validate = response;
    if(this.validate){
      await this.quizzService.calculateScore()
      this.router.navigate(['/resultat']);
    }
  }

  redirectToResult() {
    this.validate = true

  }

}
