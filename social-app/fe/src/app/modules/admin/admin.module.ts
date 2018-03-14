import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Browser } from 'protractor';
import { BkmCartDirective } from '../../directives/bkmCart.directive';


@NgModule({
  imports: [
    CommonModule,BrowserModule
  ],
  declarations: [AdminComponent,BkmCartDirective],
  bootstrap: [AdminComponent]
})
export class AdminModule { }