import { Injectable } from '@angular/core';
import { SONGS } from './mock-songs';
import { Song } from './song.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class SongService {

  songs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.songs = database.list('songs');
  }

  getSongs() {
    return this.songs;
  }

  addSong(newSong: Song) {
    this.songs.push(newSong);
  }

  getSongById(songId: number){
  //   for (var i = 0; i <= SONGS.length - 1; i++) {
  //     if (SONGS[i].id === songId) {
  //       return SONGS[i];
  //     }
  //   }
  }

}