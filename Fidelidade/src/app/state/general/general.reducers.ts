import { Action, createReducer, on, props } from '@ngrx/store';
import { actionLoadingChange } from './general.action';

export interface GeneralState {
  loading: number;
}

export const initialState: GeneralState = {
  loading: 0,
};

const GENERALREDUCERS = createReducer(
  initialState,
  on(actionLoadingChange, (state, { status }) => ({
    ...state,
    loading: status
      ? state.loading + 1
      : state.loading <= 0
      ? 0
      : state.loading - 1,
  }))
);

export function generalReducer(
  state: GeneralState | undefined,
  action: Action
) {
  return GENERALREDUCERS(state, action);
}
