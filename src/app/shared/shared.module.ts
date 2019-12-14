import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavigationComponent } from '@photon/shared/components/bottom-navigation/bottom-navigation.component';
import { MaterialModule } from '@photon/module/material.module';
import { NativeButtonPipe } from './pipes/native-button.pipe';

@NgModule({
  declarations: [BottomNavigationComponent, NativeButtonPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BottomNavigationComponent,
    NativeButtonPipe,
    MaterialModule
  ]
})
export class SharedModule { }
