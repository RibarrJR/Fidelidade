import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { selectLoading } from './state/general/general.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fidelidade';
  load: any;

  constructor(private store: Store) {


  }

  ngOnInit() {
   this.load = this.store.select(selectLoading)
  }



}
