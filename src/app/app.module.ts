import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugListComponent } from './sidenav-routes/bug-list/bug-list.component';
import { BugDetailsComponent } from './components/bug-details/bug-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BugDetailsFilterPipe } from './Filters/bug-details-filter.pipe';
import { EditBugDetailsComponent } from './components/edit-bug-details/edit-bug-details.component';



const appRoutes: Routes = [
  {path: '',component: BugListComponent},
  {path: 'bug_details/:id',component: BugDetailsComponent},
  {path: 'new_ticket',component: NewTicketComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BugDetailsComponent,
    SidenavComponent,
    NewTicketComponent,
    BugDetailsFilterPipe,
    EditBugDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatRippleModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
