/**
 * Created by Amila on 4/26/2017.
 */
import { Component} from '@angular/core';

@Component({
  selector: 'app-accused',
  templateUrl: './accused.component.html',
  styleUrls: ['./accused.component.css']
})
export class AccusedComponent {
  gender: any;
  cortDate: any;
  status: any;
  fine: any;
  trialDate: any;

  constructor() {
    this.gender = null;
    this.cortDate = null;
    this.status = null;
    this.fine = null;
    this.trialDate = null;
  }
}
