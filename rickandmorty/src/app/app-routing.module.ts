import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersGroupComponent } from './characters-group/characters-group.component';
import { AboutComponent } from './about/about.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersGroupComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'character',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
