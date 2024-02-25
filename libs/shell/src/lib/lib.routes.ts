import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const shellRoutes: Route[] = [
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
