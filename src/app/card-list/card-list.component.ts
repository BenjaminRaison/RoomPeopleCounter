import {Component, OnInit} from '@angular/core';
import {RoomInfo} from "../model";
import {RoomService} from "../service/room.service";
import {startWith, switchMap} from "rxjs/operators";
import {interval} from "rxjs";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  public data: RoomInfo[] = [];

  constructor(private service: RoomService) {
  }

  ngOnInit() {
    interval(7000)
      .pipe(
        startWith(0),
        switchMap(() => this.service.getLatest())
      )
      .subscribe(res => {
        if (this.data.toString() !== res.toString()) {
          this.data = res
        }
      });
  }

}
