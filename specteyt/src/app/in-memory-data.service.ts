import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Room } from './room';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [];
    return {rooms};
  }
}
