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

  selectedFileSource: any;

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  getSource(imageSource){
    this.selectedFileSource = imageSource;
    console.log(imageSource)
  }

  submitForm(
    title: string,
    artist: string,
    Date: string,
    why: string)
    {
    var newSong: Song = new Song(title, artist, Date, why, this.selectedFileSource);
    this.songService.addSong(newSong);
  }

}
