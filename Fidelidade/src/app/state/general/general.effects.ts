import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { actionLogin } from "./general.action";

@Injectable()
export class GeneralEffects {
    // loading$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(actionLogin)
    //     ),
    //     {
    //         dispatch: false,
    //     }
    // );
    

    constructor(
        private actions$: Actions,
        private store: Store,
    ) { }
}