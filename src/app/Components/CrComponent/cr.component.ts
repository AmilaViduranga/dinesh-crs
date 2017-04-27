/**
 * Created by Amila on 4/26/2017.
 */
import { Component, ViewChild } from '@angular/core';
import {OfficerComponent} from '../OfficerComponent/officer.component';
import {InformantComponent} from '../InformantComponent/informant.component';
import {ItemComponent} from '../ItemComponent/item.component';
import {AccusedComponent} from '../AccusedComponent/accused.component';
import {CrService} from '../../Services/cr.service';

@Component({
  selector: 'app-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.css']
})
export class CrComponent {
  detectionDate: any;
  crsObject:any;

  @ViewChild(OfficerComponent)
  Officer: OfficerComponent;

  @ViewChild(InformantComponent)
  Informant: InformantComponent;

  @ViewChild(ItemComponent)
  Item: ItemComponent;

  @ViewChild(AccusedComponent)
  Accused: AccusedComponent;

  constructor(private service: CrService) {

  }

  addCrs() {
    this.crsObject = {
      'detectionDate': this.detectionDate,
      'detectionOfficer': this.Officer.selectedOfficer,
      'informant': this.Informant.selectedOfficer,
      'detectedItem': {
        'itemCode': this.Item.selectedItem,
        'subItemCode': this.Item.selectedSubItem,
        'amount': {
          'amount': this.Item.amount,
          'unit': this.Item.subItemUnit
        }
      },
      'accused': {
        'gender': this.Accused.gender,
        'cortDate': this.Accused.cortDate,
        'fine': this.Accused.fine,
        'status': this.Accused.status
      }
    };

    this.service.addCr(this.crsObject)
      .subscribe((data) => {
        if (data == 200) {
          alert("successfully saved");
        }
      });
  }
}
