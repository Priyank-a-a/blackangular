import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { CreatePlayerComponent } from './create-player/create-player.component';



const routes: Routes = [
{path: 'players', component: PlayerListComponent},
{path: 'create-player', component: CreatePlayerComponent},
{path: '', redirectTo: 'players', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

