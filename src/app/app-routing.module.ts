import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@photon/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  },
  {
    path: 'info',
    canActivate: [AuthGuard],
    loadChildren: () => import('@photon/shared/views/landing/landing.module').then(module => module.LandingModule)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('@photon/shared/views/auth/auth.module').then(module => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
