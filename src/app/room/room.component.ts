import {Component, OnInit} from '@angular/core';
import {RoomService} from "../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {RoomInfo} from "../model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public roomInfo: RoomInfo = {roomId: '', data: []};
  public lineChartData: Array<any>;
  public lineChartLabels: Array<string> = [];

  public from: number = 0;
  public to: number = Number.MAX_SAFE_INTEGER;

  public fromString: string = '00:00';
  public toString: string = '23:59';


  constructor(private service: RoomService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getLatest().subscribe(value => {
      value.forEach(v => {
        if (v.roomId === id) {
          this.roomInfo = v;
        }
      });
      this.update();
    });

  }

  update() {
    this.roomInfo.data = this.roomInfo.data.sort((a, b) => b.timestamp - a.timestamp);
    let data: Array<number> = [];

    for (let i = 0; i < this.roomInfo.data.length; i++) {
      if (this.roomInfo.data[i].timestamp >= this.from && this.roomInfo.data[i].timestamp <= this.to) {
        data.push(this.roomInfo.data[i].count);
        this.lineChartLabels.push(this.toShortTime(this.roomInfo.data[i].timestamp));
      }
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

  onToChange(value: string) {
    let parts: string[] = value.trim().split(":");
    let date: Date = new Date();

    date.setHours(Number.parseInt(parts[0]), Number.parseInt(parts[1]));

    this.to = date.getTime();
    this.update()
  }

  onFromChange(value: string) {
    let parts: string[] = value.trim().split(":");
    let date: Date = new Date();

    date.setHours(Number.parseInt(parts[0]), Number.parseInt(parts[1]));

    this.from = date.getTime();
    this.update()
  }

}
