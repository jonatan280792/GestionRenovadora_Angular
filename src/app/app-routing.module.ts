import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './_components/home/home.module#HomeModule' },
  { path: 'users', loadChildren: './_components/users/users.module#UsersModule' },
  { path: 'admin', loadChildren: './_components/admin/admin.module#AdminModule' },
  { path: 'access-denied', loadChildren: './_components/access-denied/access-denied.module#AccessDeniedModule' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

