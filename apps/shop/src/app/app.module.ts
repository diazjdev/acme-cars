import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShellModule } from '@shell';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
