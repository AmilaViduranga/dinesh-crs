/**
 * Created by Amila on 4/26/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerAddressesService {
  actionUrl: any;

  constructor() {
    this.actionUrl = 'http://192.168.8.102:4040/api/';
  }
}
