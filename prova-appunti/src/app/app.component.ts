import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-appunti';



  sendEmail(a : HTMLInputElement,ogg : HTMLInputElement,txt : HTMLInputElement){
    console.log(a.value + " "+ ogg.value + " " + txt.value + " ")

  }
}
