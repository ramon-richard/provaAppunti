import { Component, Input, OnInit,HostBinding } from '@angular/core';
import { Email } from '../models/email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {

  constructor() { }
  @Input()email : Email = null!;
  @HostBinding("class") cssColor = "white"
  show = false;
  ngOnInit(): void {
  }
    onShowHide(){
      this.show = !this.show


    }
    specializza(){
  if(this.cssColor == "white")this.cssColor = "yellow"
  else this.cssColor = "white"


    }
  }


