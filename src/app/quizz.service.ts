import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  questionnaire = [
    {
      q: "Quel est le nom de la race de chat connue pour ses yeux bleus et son pelage pointu ?",
      r: ["Siamois", "Maine Coon", "Persan", "Bengal"],
      correct: "Siamois"
    },
    {
      q: "Quelle est la couleur de pelage typique d'un chat Tigré ?",
      r: ["Blanc", "Gris", "Noir", "Rayé marron"],
      correct: "Rayé marron"
    },
    {
      q: "Quel est le nom du fameux chat à rayures imaginé par l'auteur Bill Watterson ?",
      r: ["Garfield", "Tom", "Hobbes", "Sylvester"],
      correct: "Hobbes"
    },
    {
      q: "Quelle est la particularité des chats polydactyles ?",
      r: ["Ils ont des yeux de différentes couleurs", "Ils ont plus de pattes que la moyenne", "Ils ont un nombre supplémentaire de doigts", "Ils sont tous blancs"],
      correct: "Ils ont un nombre supplémentaire de doigts"
    },
    {
      q: "Quel est le comportement typique d'un chat qui est content ?",
      r: ["Il siffle", "Il miaule fort", "Il ronronne", "Il cache sa tête"],
      correct: "Il ronronne"
    },
    {
      q: "Quelle est la durée de vie moyenne d'un chat domestique ?",
      r: ["5-7 ans", "10-15 ans", "15-20 ans", "20-25 ans"],
      correct: "10-15 ans"
    },
    {
      q: "Quel aliment est dangereux pour les chats ?",
      r: ["Poulet cuit", "Poisson", "Chocolat", "Carottes"],
      correct: "Chocolat"
    },
    {
      q: "Quel est le nom du célèbre chat de la série animée 'Tom et Jerry' ?",
      r: ["Tom", "Jerry", "Felix", "Sylvester"],
      correct: "Tom"
    },
    {
      q: "Comment appelle-t-on le comportement d'un chat qui se frotte contre vous ?",
      r: ["Marquage", "Jouet", "Pétrissage", "Miaulement"],
      correct: "Marquage"
    },
    {
      q: "Quel est le principal prédateur naturel des chats sauvages ?",
      r: ["Aigle", "Loup", "Renard", "Ours"],
      correct: "Renard"
    }
  ]
  userAnswers: { [key: number]: string } = {};
  score?: number;

  calculateScore(){
    let score = 0;
    this.questionnaire.forEach((item, index) => {
      if (this.userAnswers[index] === item.correct) {
        score++;
      }
    });
    this.score = (score / Object.keys(this.questionnaire).length)*10
  }

  resetAnswers(): void {
    this.userAnswers = {};
    this.score = undefined;
  }

  addResponse(key: number, resp: string){
    this.userAnswers[key] = resp
  }

  constructor() { }
}
