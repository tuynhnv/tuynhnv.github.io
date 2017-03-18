import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {AF} from "../../providers/af";

@Component({
  selector: 'app-addquestion-page',
  templateUrl: './addquestion-page.component.html',
  styleUrls: ['./addquestion-page.component.css']
})
export class AddquestionPageComponent implements OnInit {

  public quizs: FirebaseListObservable<any>;

  constructor(public afService: AF) {
      this.quizs=this.afService.quizs;
   }

  ngOnInit() {
  }


  addquestion(event, dethi, name, A, B, C, D, key){
    event.preventDefault();
    this.afService.addquestion(dethi, name, A, B, C, D, key)
  }
}
