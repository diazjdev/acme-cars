import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { RouterModule, Routes } from '@angular/router';

const components = [CarsListComponent];
const routes: Routes = [{ path: '', component: CarsListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...components],
  exports: [...components],
})
export class ListModule {}
