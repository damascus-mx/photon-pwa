import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '@photon/service/facade.service';
import { AuthenticationService } from '@photon/service/authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,

    FacadeService
  ]
})
export class ServicesModule { }
