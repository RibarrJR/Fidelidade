import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GeneralState } from 'src/app/state/general/general.reducers';
import { actionToastOff, actionToastOn } from 'src/app/state/toast/toast.action';

import { ToastState } from 'src/app/state/toast/toast.reducers';
import { selectToastMessage, selectToastStatus } from 'src/app/state/toast/toast.selector';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  message=new Observable<string>();
  status= new Observable<boolean>();
  constructor(private store: Store<ToastState>) {}

  ngOnInit(): void {
    this.message = this.store.select<string>(selectToastMessage);
    this.status = this.store.select<boolean>(selectToastStatus);
  }

  close(){
    this.store.dispatch(actionToastOff({visible:false}))
  }
}
