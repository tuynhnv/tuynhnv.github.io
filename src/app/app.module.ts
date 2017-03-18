import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import {Timer} from "../providers/time";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { GradePageComponent } from './grade-page/grade-page.component';
import { AddquestionPageComponent } from './addquestion-page/addquestion-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDpcHqGHomwkl2oNAIEFAaDr58jqW40pJg",
    authDomain: "push-example-921a8.firebaseapp.com",
    databaseURL: "https://push-example-921a8.firebaseio.com",
    storageBucket: "push-example-921a8.appspot.com",
    messagingSenderId: "415083462802"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent},
  { path: 'quiz', component: QuizPageComponent},
  { path: 'grade', component: GradePageComponent},
  { path: 'addquestion', component: AddquestionPageComponent}
  
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule,
    Ng2PaginationModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent, QuizPageComponent, GradePageComponent, AddquestionPageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF, Timer]
})
export class AppModule {}
