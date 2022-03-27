import { Component } from '@angular/core';
import { Email } from './models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-appunti';
  vettMail : Email[] = [];

sendEmail(a : HTMLInputElement,ogg : HTMLInputElement,txt : HTMLInputElement){
    console.log(a.value + " "+ ogg.value + " " + txt.value + " ")
    let e = new Email(a.value,ogg.value,txt.value)
    this.vettMail.push(e)
  }
}
