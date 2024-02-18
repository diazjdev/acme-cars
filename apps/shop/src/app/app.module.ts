import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
