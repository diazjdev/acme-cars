import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './lib.routes';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(shellRoutes)],
  exports: [RouterModule, LayoutComponent],
})
export class ShellModule {}
