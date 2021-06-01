import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GeneralState } from "./general.reducers";

export const selectGeneralState = createFeatureSelector<GeneralState>('general');

export const selectLoading = createSelector(selectGeneralState, (state) => state.loading)