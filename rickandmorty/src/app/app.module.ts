import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersGroupComponent } from './characters-group/characters-group.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListService } from './character-list.service';
import { CharacterDetailService } from './character-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CharacterCardComponent,
    CharactersGroupComponent,
    HomeComponent,
    AboutComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterListService,
    CharacterDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
