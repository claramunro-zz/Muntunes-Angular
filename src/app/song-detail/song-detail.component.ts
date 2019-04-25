import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Song } from '../song.model';
import { SongService } from '../song.service';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
  providers: [SongService]

})

export class SongDetailComponent implements OnInit {
  songId: string;
  songToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private songService: SongService
    ) {}

  // ngOnInit() {
  //   this.route.params.forEach((urlParameters) => {
  //     this.songId = urlParameters['id'];
  //   });  
  //   this.songToDisplay = this.songService.getSongById(this.songId);
  // }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.songId = urlParametersArray['id'];
   });
   this.songService.getSongById(this.songId).subscribe(dataLastEmittedFromObserver => {
     this.songToDisplay = new Song(dataLastEmittedFromObserver.title,
                                      dataLastEmittedFromObserver.artist,
                                      dataLastEmittedFromObserver.Date,
                                      dataLastEmittedFromObserver.why,
                                      dataLastEmittedFromObserver.source
                                      )
   })
  }

  

}