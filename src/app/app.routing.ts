import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent }   from './music/music.component';
import { SongDetailComponent }   from './song-detail/song-detail.component';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'songs/:id',
    component: SongDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);