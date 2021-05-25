import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

import { ActorService } from './services/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hello';
  greeting$!: Observable<string>;

  constructor(private actorService: ActorService) {}

  ngOnInit() {
    this.greeting$ = from(this.actorService.actor.greet('developer'));
  }
}
