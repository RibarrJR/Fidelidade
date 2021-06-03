import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actionLoadingChange } from 'src/app/state/general/general.action';

import { GeneralState } from 'src/app/state/general/general.reducers';
import { actionToastOn } from 'src/app/state/toast/toast.action';
import { ToastState } from 'src/app/state/toast/toast.reducers';
import { RequestCadastroDeUsuario } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.scss'],
})
export class CadastroPageComponent implements OnInit {
  public form: FormGroup = this._fb.group({
    Nome: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
      ],
    ],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    CPF: [
      '',
      [Validators.minLength(11), Validators.maxLength(11), Validators.required],
    ],
  });

  constructor(
    private _fb: FormBuilder,
    private service: CadastroService,
    private store: Store<GeneralState>,
    private storeToast:Store<ToastState>
  ) {}

  ngOnInit(): void {}

  enviar(form: RequestCadastroDeUsuario) {
    this.store.dispatch(actionLoadingChange({ status: true }));
    this.service.AddUserPost(form).subscribe((r) => {
      this.store.dispatch(actionLoadingChange({ status: false }));
      this.storeToast.dispatch(
        actionToastOn({
          message: 'Cadastro do usuário realizado com Sucesso!',
           visible: true,
        })
      );
    });
  }
}
