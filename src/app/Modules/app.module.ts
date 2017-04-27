import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../Components/RootComponent/app.component';
import {AccusedComponent} from '../Components/AccusedComponent/accused.component';
import {InformantComponent} from '../Components/InformantComponent/informant.component';
import {ItemComponent} from '../Components/ItemComponent/item.component';
import {OfficerComponent} from '../Components/OfficerComponent/officer.component';
import {CrComponent} from  '../Components/CrComponent/cr.component';

import {CrService} from '../Services/cr.service';
import {ServerAddressesService} from '../Services/serverAddresses.service';

@NgModule({
  declarations: [
    AppComponent,
    AccusedComponent,
    InformantComponent,
    ItemComponent,
    OfficerComponent,
    CrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CrService,
    ServerAddressesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
