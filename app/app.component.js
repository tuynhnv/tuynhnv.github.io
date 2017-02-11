"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var question_1 = require('./quiz/question');
var answer_1 = require('./quiz/answer');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var APP_MD_DIRECTIVES = [
    card_1.MD_CARD_DIRECTIVES,
    button_1.MD_BUTTON_DIRECTIVES,
    toolbar_1.MD_TOOLBAR_DIRECTIVES,
    sidenav_1.MD_SIDENAV_DIRECTIVES,
    list_1.MD_LIST_DIRECTIVES,
    icon_1.MD_ICON_DIRECTIVES
];
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
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
        this.questions = [];
        this.getquized = false;
        this.correctCount = 0;
        this.submitted = false;
    }
    AppComponent.prototype.getQuiz = function () {
        var _this = this;
        this.http.get('https://tracnghiem-sample.firebaseio.com/dethi.json').
            subscribe(function (response) {
            var data = response.json();
            console.log(response);
            for (var i = 0; i < data.questions.length; i++) {
                var answer = [];
                for (var j = 0; j < data.questions[i].answer.length; j++) {
                    answer[j] = new answer_1.Answer(data.questions[i].answer[j]);
                }
                _this.questions[i] = new question_1.Question(data.questions[i].name, answer, data.questions[i].key);
            }
            for (var i = 0; i < data.questions.length; i++) {
                console.log('name: ' + _this.questions[i].name);
                for (var j = 0; j < data.questions[i].answer.length; j++) {
                    console.log('answer:' + _this.questions[i].answer[j].name);
                }
                console.log('key: ' + _this.questions[i].key);
            }
        });
        this.getquized = true;
    };
    AppComponent.prototype.showResult = function () {
        var qLength = this.questions.length;
        this.correctCount = 0;
        for (var i = 0; i < qLength; i++) {
            if (this.questions[i].key == this.questions[i].userAnswer) {
                this.correctCount++;
            }
        }
        this.submitted = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
            directives: [APP_MD_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map