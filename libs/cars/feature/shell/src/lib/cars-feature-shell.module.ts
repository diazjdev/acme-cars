import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () => import('@acme-cars/list').then((m) => m.ListModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CarsFeatureShellModule {}
