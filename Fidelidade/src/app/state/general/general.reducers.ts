import { Action, createReducer, on } from "@ngrx/store";
import { actionLogin } from "./general.action";


export interface GeneralState {
    loading: number;
}

export const initialState: GeneralState = {
    loading: 0,
}

const GENERALREDUCER = createReducer(
    initialState,
    on(actionLogin, state => ({ ...state, loading: state.loading })),
);

export function generalReducer(state: GeneralState | undefined, action: Action) {
    return GENERALREDUCER(state, action);
}