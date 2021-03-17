import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { LoaderComponent } from './loader/loader.component';
import { ViewportTriggerComponent } from './viewport-trigger/viewport-trigger.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CharacterCardComponent,
    LoaderComponent,
    ViewportTriggerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharacterCardComponent,
    LoaderComponent,
    ViewportTriggerComponent
  ]
})
export class SharedModule { }
