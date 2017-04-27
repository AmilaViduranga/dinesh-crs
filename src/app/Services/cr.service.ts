/**
 * Created by Amila on 4/26/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {ServerAddressesService} from './serverAddresses.service';

@Injectable()
export class CrService {
  token: any;
  actionUrl: any;
  headers: any;

  constructor(private http: Http, private service: ServerAddressesService) {
    this.actionUrl = service.actionUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  loadOfficersIds() {
    return this.http.get(this.actionUrl + '/users').map(res => res.json());
  }

  loadOfficerInfo(officerId) {
    return this.http.get(this.actionUrl + '/users/' + officerId).map(res => res.json());
  }

  loadItems() {
    return this.http.get(this.actionUrl + '/items').map(res => res.json());
  }

  loadSubItems(itemCode) {
    return this.http.get(this.actionUrl + '/items/' + itemCode + '/subs').map(res => res.json());
  }

  addCr(crsObject) {
    return this.http.post(this.actionUrl + 'crs', crsObject).map(res => res.status);
  }
}
