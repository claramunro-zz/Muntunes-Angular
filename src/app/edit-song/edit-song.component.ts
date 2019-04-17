import { Component, Input, OnInit } from '@angular/core';
import { SongService } from '../song.service';



@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css'],
  providers: [SongService]
})
export class EditSongComponent implements OnInit {

  @Input() selectedSong;


  constructor(private songService: SongService) { }

  ngOnInit() {
  }


  beginUpdatingSong(songToUpdate){
    this.songService.updateSong(songToUpdate);
  }

  beginDeletingSong(songToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.songService.deleteSong(songToDelete);
    }
  }

}
