import { Component, Input } from '@angular/core';
import { Character } from '../shared/models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent{

  @Input() character: Character = {} as Character;

}
