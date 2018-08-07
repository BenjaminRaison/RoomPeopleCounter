import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from "../service/room.service";
import {RoomInfo} from "../model";

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input('roomInfo')
  public roomInfo: RoomInfo;

  public lineChartData: Array<any>;
  public lineChartLabels: Array<string> = [];
  lineChartColours: Array<any> = [
    {}
  ];

  constructor(private service: RoomService) {
  }

  ngOnInit() {
    this.roomInfo.data = this.roomInfo.data.sort((a, b) => b.timestamp - a.timestamp);

    let data: Array<number> = [];

    for (let i = 0; i < this.roomInfo.data.length && i < 10; i++) {
      data.push(this.roomInfo.data[i].count);
      this.lineChartLabels.push(this.toShortTime(this.roomInfo.data[i].timestamp));
    }
    this.lineChartData = [{
      data: data,
      label: 'People'
    }];
  }

  toTime(timestamp: number) {
    return new Date(timestamp).toLocaleTimeString();
  }

  toShortTime(timestamp: number) {
    return this.toTime(timestamp).substring(0, 5);
  }

}
