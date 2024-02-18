import { Route } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'cars', pathMatch: 'full' },
      {
        path: 'cars',
        loadChildren: () =>
          import('@acme-cars/cars/feature/shell').then(
            (m) => m.CarsFeatureShellModule
          ),
      },
    ],
  },
];
