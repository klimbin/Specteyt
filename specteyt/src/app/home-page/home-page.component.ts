import { Component, OnInit } from '@angular/core';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.css' ]
})
export class HomePageComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
  }

  addRoom(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}
