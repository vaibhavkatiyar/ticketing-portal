import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavRoutesComponent } from './sidenav-routes.component';

const routes: Routes = [{ path: '', component: SidenavRoutesComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutesRoutingModule { }
