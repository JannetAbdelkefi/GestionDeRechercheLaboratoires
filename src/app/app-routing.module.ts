import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembreListComponent} from './membre-list/membre-list.component';
import {MemberFormComponent} from './member-form/member-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembreListComponent,
  },
  {
    path: 'member-form',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: '**',
    redirectTo: 'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
