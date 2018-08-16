import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {RoomCardComponent} from './room-card/room-card.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCommonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {CardListComponent} from './card-list/card-list.component';
import {ChartsModule} from "ng2-charts";
import {RoomComponent} from './room/room.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    CardListComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatCommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
