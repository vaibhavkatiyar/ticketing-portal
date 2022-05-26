import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { SidenavRoutesRoutingModule } from './sidenav-routes-routing.module';
import { SidenavRoutesComponent } from './sidenav-routes.component';
import { Routes,RouterModule } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { TrashComponent } from './trash/trash.component';


const appRoutes: Routes = [
  {path: '',component: BugListComponent},
  {path: 'bug_list',component: BugListComponent},
  {path: 'trash',component: TrashComponent},

];


@NgModule({
  declarations: [
    SidenavRoutesComponent,
    BugListComponent,
    TrashComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutesRoutingModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SidenavRoutesModule { }
