import {Answer} from './answer';
import {Injectable} from '@angular/core';

@Injectable()
export class Question {
    name: string;
    answer: Answer[]=[];
    userAnswer: string;
    key: string;
    constructor(name: string, answer: Answer[],key:string){
        this.name=name;
        this.answer=answer;
        this.key=key;
    }
}