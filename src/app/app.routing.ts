import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { MusicComponent }   from './music/music.component';
import { SongDetailComponent }   from './song-detail/song-detail.component';



const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'songs/:id',
    component: SongDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);