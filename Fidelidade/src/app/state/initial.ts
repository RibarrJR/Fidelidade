import { ActionReducerMap } from '@ngrx/store';

import { GeneralState, generalReducer } from './general/general.reducers'
import { toastReducer, ToastState } from './toast/toast.reducers';
export interface AppState {
    general: GeneralState;
    toast:ToastState;
}

export const reducers: ActionReducerMap<AppState> = {
    general: generalReducer,
    toast:toastReducer,
};
