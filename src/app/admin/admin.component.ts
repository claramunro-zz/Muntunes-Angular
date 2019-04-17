import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song.model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SongService]

})
export class AdminComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newSong: Song = new Song(title, artist, description);
    this.songService.addSong(newSong);
  }

}
