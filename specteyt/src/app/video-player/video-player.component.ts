import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoId: string;
  videoUrl: string;
  showVideo: boolean = false;

  constructor(
    private roomService: RoomService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    var input = (<HTMLInputElement>event.target).value;
    if(input.startsWith("https://www.youtube.com/watch?v=")) {
      this.updateVideoUrl(input.substring("https://www.youtube.com/watch?v=".length));
    }
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    var dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);

    // for some reason without NgIf module
    // the iframe will render the home page
    this.showVideo = true;
  }

}
