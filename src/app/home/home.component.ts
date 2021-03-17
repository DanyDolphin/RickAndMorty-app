import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '../shared/models';
import { ClientService } from '../shared/services/client.service';
import { ViewportTriggerComponent } from '../viewport-trigger/viewport-trigger.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('trigger') trigger: ViewportTriggerComponent

  public characters: Character[] = []
  public nextPage: string | undefined = undefined

  constructor(
    private client: ClientService
  ) { }

  ngOnInit(): void {
    this.loadPage()
  }

  onTrigger(): void {
    console.log('received!!')
    this.loadPage()
  }

  loadPage(): void {
    this.client.getPage(this.nextPage).subscribe(response => {
      this.characters = [...this.characters, ...response.results]
      this.nextPage = response.info.next
      if (this.trigger) this.trigger.reset()
    })
  }

}
