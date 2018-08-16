import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CardListComponent} from "./card-list/card-list.component";
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
  {path: 'list', component: CardListComponent},
  {path: 'room/:id', component: RoomComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
