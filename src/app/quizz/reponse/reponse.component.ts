import { Component, Input } from '@angular/core';
import { QuizzService } from '../quizz.service';
@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent {
  constructor(
    private quizzService: QuizzService
  ) {}
  @Input() reponses: string[] = []
  @Input() i: number = 0
  @Input() startDate: Date = new Date()
  responsed = false
  addResponse(key: number, resp: string){
    this.responsed = false;
    this.responsed = true;
    this.quizzService.addResponse(key,resp)
  }
}
