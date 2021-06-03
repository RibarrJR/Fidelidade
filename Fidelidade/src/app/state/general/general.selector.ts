import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GeneralState } from "./general.reducers";


// States
export const selectGeneralState = createFeatureSelector<GeneralState>('general');


// General State
export const selectLoading = createSelector(selectGeneralState, (state) => state.loading)
