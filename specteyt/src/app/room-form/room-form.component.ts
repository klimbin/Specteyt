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

  onSubmit() {
    //console.log(JSON.stringify(this.model));
    var roomName = this.model.roomName;
    var displayName = this.model.displayName;

    // make a new room id with radix 36
    var roomId = Math.random().toString(36).slice(2);

    this.addRoom(new Room(roomId, roomName));
    this.router.navigate([roomId]);
  }

  addRoom(room: Room): void {
    this.roomService.addRoom(room).subscribe();
  }

}
