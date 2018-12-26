import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: [ './room-form.component.css' ]
})
export class RoomFormComponent {
  model: any = {};

  constructor(
    private router: Router,
    private roomService: RoomService
  ) {}

  create_UUID(){
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
  }

  onSubmit() {
    //console.log(JSON.stringify(this.model));
    var roomName = this.model.roomName;
    var displayName = this.model.displayName;

    // make a new room
    var roomId = this.create_UUID();

    this.addRoom(new Room(roomId, roomName));
    this.router.navigate([roomId]);
  }

  addRoom(room: Room): void {
    this.roomService.addRoom(room).subscribe();
  }

}
