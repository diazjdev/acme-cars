import { createReducer, on } from '@ngrx/store';
import { toggleNavLabels } from '../actions/actions';

export interface UiState {
  loading: boolean;
  showNavLabels: boolean;
}

export const initState: UiState = {
  loading: false,
  showNavLabels: true,
};

export const uiReducer = createReducer(
  initState,
  on(toggleNavLabels, (state) => ({
    ...state,
    showNavLabels: !state.showNavLabels,
  }))
);

export interface AppState {
  ui: UiState;
}

export const rootReducer = {
  ui: uiReducer,
};
