import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../reducers/root.reducer';
import { state } from '@angular/animations';

export const uiFeature = createFeatureSelector<UiState>('ui');
export const selectLoading = createSelector(
  uiFeature,
  (state) => state.loading
);
export const selectShowNavLabels = createSelector(
  uiFeature,
  (state) => state.showNavLabels
);

export const selectUi = createSelector(uiFeature, (state) => state);
