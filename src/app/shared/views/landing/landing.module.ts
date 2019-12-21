import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from '@photon/shared/views/landing/components/landing.component';
import { SharedModule } from '@photon/shared/shared.module';
import { MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MatDividerModule
  ]
})
export class LandingModule { }
