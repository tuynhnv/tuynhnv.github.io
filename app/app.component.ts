import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http, URLSearchParams, Headers} from '@angular/http';
import {Question} from './quiz/question';
import {Answer} from './quiz/answer';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';


const APP_MD_DIRECTIVES = [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
    directives: [APP_MD_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class AppComponent {
/*implements OnInit {

    ngOnInit() {
        this.setupPushNotifications();
        //this.syncData();
    }

    syncData() {
        /*let hasPendingRequest = true;
        let that = this;

        this.bookingervice.sync().then((b: Booking[]) => {
            hasPendingRequest = false;
            that.bookings = b;
            that.changeDetectionRef.detectChanges();
        });

        this.bookingervice.fetchLocal().then((b: BookingsDoc) => {
            if (!hasPendingRequest) return;
            if (!b) return;
            that.bookings = b.bookings;
            that.changeDetectionRef.detectChanges();
        });*/

   // }

   // requestUpload() {

        /*let nav:any = navigator;

        if ('serviceWorker' in nav && 'SyncManager' in window) {
            nav.serviceWorker
                .ready
                .then(reg => {
                    return reg.sync.register('upload');
                })
                .catch(_ => {
                  console.log("upload");
                    //return this.bookingervice.upload();
                });
        }
        else {
          console.log("upload");
        }*/

    //}

    //setupPushNotifications() {

        /*let nav:any = navigator;

        if ('serviceWorker' in navigator) {
            console.log('Service Worker is supported');
            nav.serviceWorker.ready.then(function(reg) {
                reg.pushManager.subscribe({
                    userVisibleOnly: true
                }).then(function(sub) {
                    console.log('endpoint:', sub.endpoint);
                });
            }).catch(function(error) {
                console.log('Error:', error);
            });
        }*/

    //}
    

    public questions: Question[]=[];
    public getquized=false;
    public correctCount=0;
    public submitted=false; 

    constructor(public http: Http ){

    }
    public getQuiz(){

        this.http.get('https://tracnghiem-sample.firebaseio.com/dethi.json').
        subscribe(response => {
            var data: any = response.json();

            console.log(response);
            for(var i=0; i<data.questions.length; i++) {
                var answer: Answer[]=[];
                
                 for(var j=0; j<data.questions[i].answer.length; j++){
                    answer[j] = new Answer(data.questions[i].answer[j]) ;
                 }
                this.questions[i] = new Question(data.questions[i].name, answer, data.questions[i].key);
            }

            for(var i=0; i<data.questions.length; i++) {
                console.log('name: ' + this.questions[i].name);
                for(var j=0; j<data.questions[i].answer.length; j++){
                    console.log('answer:' + this.questions[i].answer[j].name);
                }
                console.log('key: ' + this.questions[i].key);
            }
        });
        this.getquized=true;
    }

    public showResult(){
        var qLength=this.questions.length;
        this.correctCount=0;
             for (var i=0; i< qLength; i++) {
                 if (this.questions[i].key == this.questions[i].userAnswer) {
                    this.correctCount++;
                 }
             }
        this.submitted=true;
    }

}
