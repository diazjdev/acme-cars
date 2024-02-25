import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './lib.routes';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './+state/reducers/root.reducer';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(shellRoutes),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  exports: [RouterModule, LayoutComponent],
})
export class ShellModule {}
