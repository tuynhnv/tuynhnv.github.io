import { Component, OnInit } from '@angular/core';
import {AF} from "../../providers/af";
import {Timer} from "../../providers/time";
import {FirebaseListObservable} from "angularfire2";
import {Question} from '../model/question';
import {Grade} from  '../model/grade';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
  
})
export class QuizPageComponent implements OnInit {

  public quizs: FirebaseListObservable<any>;
  public dethi: FirebaseListObservable<any>;
  public questions: FirebaseListObservable<any>;
  public timedethi: number;
  public correctCount: number;
  public lambaithied = false;
  public namequiz: string;
  public selectquiz = false;
  public result = false;
  public review = false;

  public questiones: Question[]=[];
  public grades: Grade[]=[];
  public grade: Grade=new Grade();

  constructor(public afService: AF, private timerService: Timer) {
      this.quizs=this.afService.quizs;
   }

  ngOnInit() {
  }
  
  lambaithi(){
    this.lambaithied =  true;
    this.questions =this.afService.getQuestion(this.namequiz);
    this.questions.subscribe(list => {
      var i=0;
       list.forEach(snapshot=> {
          this.questiones[i]=new Question(snapshot.name,snapshot.key, snapshot.A, snapshot.B, snapshot.C, snapshot.D);
          this.questiones[i].isAnswer=false;
          console.log(this.questiones[i].name + i);
          console.log(this.questiones[i].D +"  " + i);
          i++;
       })
      });
    this.timerService.startTimer();
    console.log(this.lambaithied);
    //console.log(this.quiz.time);
  }

  chondethi(){
     this.dethi=this.afService.chondethi(this.namequiz)
     this.dethi.subscribe(list => {
       list.forEach(snapshot=> {
          if(snapshot.name = this.namequiz) {
      //      this.quiz=new Quiz(snapshot);
        //    console.log(this.quiz.time);
            this.timerService.initTimer((snapshot.time) * 60);
            //console.log(snapshot.time);
          }
       })
      });
     this.selectquiz = true;
     this.lambaithied = false;
     this.result =false;
     
     
    //  console.log(this.timerService.displayTime);
     // console.log(this.timedethi);
  }

  // onSelect(i: number, userAnswer: string){
  //     this.userAnswer[i]=userAnswer;
  //     console.log(this.userAnswer[i]+ "   " + i);
    
  // }

  nopbai() {
    this.correctCount=0;
    var i=0;
    this.questiones.forEach(q=>{
      if(q.userAnswer==q.key){
        this.correctCount++;
      }
      console.log(this.questiones[i].isAnswer);
      i++;
    })
    console.log(this.correctCount);
    this.tinhdiem();
    this.result=true;
    this.selectquiz=false;
    this.lambaithied=false;
    this.afService.sendGrade(this.grade.mark, this.grade.dethi);
  }

  tinhdiem(){
    this.grade=new Grade();
    this.grade.mark=(this.correctCount/this.questiones.length)* 10;
    this.grade.dethi=this.namequiz;
    console.log(this.grade.mark);
  }

  xemlai(){
    this.review=true;
    //this.lambaithied=false;
  }
}
  