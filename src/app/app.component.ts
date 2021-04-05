import { Component } from '@angular/core';


//attribute
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'recapproject';
  car = {carId : 1, Description : "Focus", ModelYear : 2013, DailyPrice : 250};

}
