import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {
  room: Room;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    // check if room exists otherwise redirect user to home page
    this.roomService.getRoom(roomId)
      .subscribe(room => {
        if (!room) {
          this.router.navigate(['/']);
        }
        this.room = room
      });
  }


  // when nobody is in the room set timeout then delete room from server
  // delete(room: Room): void {
  //   this.heroService.deleteRoom(this.room).subscribe();
  // }

}
