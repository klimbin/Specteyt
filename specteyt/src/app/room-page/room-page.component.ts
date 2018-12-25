import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {
  roomId: String;
  roomName: String;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRoom();
  }

  getRoom(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.roomId = id;
    // check if room is valid otherwise redirect user to home page

    // TODO: get roomName so it can be rendered
    // start listening for updates to the chat/stream

  }

}
