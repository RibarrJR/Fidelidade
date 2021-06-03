import { createAction, props } from "@ngrx/store";

export const actionToastOn = createAction(
  '[Toast] Start Toast',
  props<{ message: string, visible:boolean }>()
);

export const actionToastOff = createAction(
  '[Toast] Finish Toast',
  props<{visible:boolean }>()
);
