import { Action, createReducer, on, props } from '@ngrx/store';
import { actionToastOff, actionToastOn } from './toast.action';

export interface ToastState {
  message: string;
  status: boolean;
}

export const initialState: ToastState = {
  message: '',
  status: false,
};

const TOASTREDUCERS = createReducer(
  initialState,
  on(actionToastOn, (state, { message, visible: status }) => ({
    ...state,
    message,
    status,
  })),
  on(actionToastOff, (state, { visible: status }) => ({
    ...state,
    message: '',
    status,
  }))
);

export function toastReducer(state: ToastState | undefined, action: Action) {
  return TOASTREDUCERS(state, action);
}
