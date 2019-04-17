import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { Router } from '@angular/router';
import { SongService } from '../song.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [SongService]

})


export class MusicComponent implements OnInit {
  songs: FirebaseListObservable<any[]>;

  constructor(private router: Router, private songService: SongService) {}


  ngOnInit(){
    this.songs = this.songService.getSongs();

  }

 goToDetailPage(clickedSong: Song) {
  // this.router.navigate(['songs', clickedSong.id]);
};
}