import { Component, Input } from '@angular/core';
import { Question } from '../../shared/types'
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
  @Input() startDate: Date = new Date()
}
