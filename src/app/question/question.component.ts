import { Component, Input } from '@angular/core';
import { Question } from '../types'
import { QuizzService } from '../quizz.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question = {
    q: '',
    r: [],
    correct: ''
  }
  @Input() i: number = 0

}
