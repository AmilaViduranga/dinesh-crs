/**
 * Created by Amila on 4/26/2017.
 */
import { Component} from '@angular/core';
import {CrService} from '../../Services/cr.service';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})

export class OfficerComponent {
  officers: any;
  selectedOfficer: any;
  selectedOfficerInfo: any;
  constructor(private service: CrService) {
    this.officers = null;
    this.selectedOfficerInfo = null;
    this.service.loadOfficersIds()
      .subscribe((data) => {
        if (data.length !== 0) {
          this.officers = data.data;
        }
      });
  }

  loadInfo(value) {
    this.service.loadOfficerInfo(value)
      .subscribe((data) => {
        if (data) {
          this.selectedOfficerInfo = {
            name: data.username,
            designation: data.designation
          };
        }
      });
  }
}
