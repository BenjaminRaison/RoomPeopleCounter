import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {RoomCardComponent} from './room-card/room-card.component';
import {MatCardModule, MatCommonModule, MatToolbarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {CardListComponent} from './card-list/card-list.component';
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatCommonModule,
    MatCardModule,
    MatToolbarModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
