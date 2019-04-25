import { Injectable } from '@angular/core';
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

  getSongById(songId: string){
    return this.database.object('songs/' + songId);
  }


  updateSong(localUpdatedSong){
    var songEntryInFirebase = this.getSongById(localUpdatedSong.$key);
    songEntryInFirebase.update({title: localUpdatedSong.title,
                                artist: localUpdatedSong.artist,
                                date: localUpdatedSong.Date,
                                why: localUpdatedSong.why
                              });
  }

  deleteSong(localSongToDelete){
    var songEntryInFirebase = this.getSongById(localSongToDelete.$key);
    songEntryInFirebase.remove();
  }

}