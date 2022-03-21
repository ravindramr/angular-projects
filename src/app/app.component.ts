import { Component, VERSION } from '@angular/core';
declare const showInput:any;
declare const showAge:any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  onclick(){
    showInput();
    showAge();
  }
}
