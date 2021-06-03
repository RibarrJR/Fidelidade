import { createAction, props } from "@ngrx/store";

export const actionLogin = createAction(
  '[Login] Login User',
  props<{ start: 0 }>()
);
// Loading
export const actionLoadingChange = createAction(
  '[Loading] Start Loading',
  props<{ status: boolean }>()
);
