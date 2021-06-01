import { createAction, props } from "@ngrx/store";

export const actionLogin = createAction(
    '[Loading] StartLoading',
    props<{start:0 }>()
  );