import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CardListComponent} from "./card-list/card-list.component";

const routes: Routes = [
  {path: 'list', component: CardListComponent},
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
