import { Injectable } from '@angular/core';
import { Song } from './song.model';
import { SONGS } from './mock-songs';


@Injectable()
export class SongService {

  constructor() { }

  getSongs() {
    return SONGS;
  }

  getSongById(songId: number){
    for (var i = 0; i <= SONGS.length - 1; i++) {
      if (SONGS[i].id === songId) {
        return SONGS[i];
      }
    }
  }

}