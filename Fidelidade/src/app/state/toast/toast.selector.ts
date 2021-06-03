import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToastState } from "./toast.reducers";


// States
export const selectToastState = createFeatureSelector<ToastState>('toast');
// Toast Selectors
export const selectToastMessage = createSelector(selectToastState,(toastState:ToastState)=> toastState.message)
export const selectToastStatus = createSelector(selectToastState,(toastState:ToastState)=> toastState.status)
