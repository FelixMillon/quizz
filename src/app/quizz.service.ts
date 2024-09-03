import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './types'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  constructor( private httpClient:HttpClient ) {}
  questionnaire = this.httpClient.get<Question[]>('http://localhost:3000/questionnaire')

  userAnswers: { [key: number]: string } = {};
  scoreSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  score?: number;

  calculateScore(){
    let score = 0;
    this.questionnaire.subscribe((data) => {
      data.forEach((item, index) => {
        if (this.userAnswers[index] === item.correct) {
          score++;
        }
      });
      this.score = (score / Object.keys(data).length)*10
      this.scoreSubject.next(this.score);
    });
  }

  resetAnswers(): void {
    this.userAnswers = {};
    this.score = undefined;
  }

  addResponse(key: number, resp: string){
    this.userAnswers[key] = resp
  }

  logdata(){
    console.log(this.questionnaire)
  }
}
