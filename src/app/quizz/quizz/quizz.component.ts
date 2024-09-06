import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../quizz.service';
import { ConfirmComponent } from '../../shared/popup/confirm/confirm.component';
import { Questionnaire, Response } from '../../shared/types';
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
  startDate: Date = new Date()
  questionnaire: Observable<Questionnaire> = this.quizzService.questionnaire

  userAnswers: Response = this.quizzService.userAnswers
  score: number | undefined = this.quizzService.score
  validate: boolean = false

  async calculateScore(): Promise<void> {
    this.quizzService.calculateScore()
  }

  resetAnswers(): void {
    this.quizzService.resetAnswers()
  }

  async getResponse(response: boolean): Promise<void> {
    this.validate = response;
    if(this.validate){
      await this.quizzService.calculateScore()
      this.router.navigate(['/resultat']);
    }
  }

  redirectToResult(): void {
    this.validate = true
  }

}
