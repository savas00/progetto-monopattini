import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monopattini';
  utenti: Array <string>=[]
  send(user:HTMLInputElement):boolean{
    this.utenti.push(user.value);
    return false
  }
}
