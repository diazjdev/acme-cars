import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading, selectUi } from '../+state';
import { UiState } from '../+state/reducers/root.reducer';
import { tap } from 'rxjs';

@Component({
  selector: 'acme-cars-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  store: Store<UiState> = inject(Store);
  ui$ = this.store.select(selectUi).pipe(tap(console.log));
}
