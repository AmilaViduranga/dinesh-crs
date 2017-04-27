/**
 * Created by Amila on 4/26/2017.
 */
import { Component} from '@angular/core';
import {CrService} from '../../Services/cr.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  itemList: any;
  selectedItem: any;
  subItems: any;
  selectedSubItem: any;
  subItemUnit: any;
  amount: any;
  constructor(private service: CrService) {
    this.itemList = null;
    this.selectedItem = null;
    this.subItems = null;
    this.selectedSubItem = null;
    this.subItemUnit = null;
    this.amount = null;
    this.service.loadItems()
      .subscribe((data) => {
        if (data.length !== 0) {
          this.itemList = data;
        }
      });
  }

  loadSubInfo(value) {
    this.service.loadSubItems(value)
      .subscribe((data) => {
        if (data.length !== 0) {
          this.subItems = data;
        }
      });
  }

  selectUnit(value) {
    const scope = this;
    this.subItems.forEach(function (item) {
      if (item.subItemCode === scope.selectedSubItem) {
        scope.subItemUnit = item.unit;
      }
    });
  }
}
