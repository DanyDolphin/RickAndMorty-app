import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/shared/client.service';
import { Character } from 'src/app/shared/models';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character = {} as Character

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client: ClientService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      if (!id)
        this.router.navigate([''])
      this.client.getCharacter(id).subscribe(
        character => this.character = character
      )
    })
  }
}
