import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliceRegistrationComponent } from './police-registration/police-registration.component';
import { FormGroup,FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PenalityRegistrationComponent } from './penality-registration/penality-registration.component';
import { CivilianRegistrationComponent } from './civilian-registration/civilian-registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppHttpModule } from './app-http/app-http.module';
import { HttpClientModule } from '@angular/common/http';
import { PenaltySheetComponent } from './penalty-sheet/penalty-sheet.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { PenaltyListComponent } from './penalty-list/penalty-list.component';
import { PenaltyDetailsComponent } from './penalty-details/penalty-details.component';
import { AdminPenaltySheetComponent } from './admin-penalty-sheet/admin-penalty-sheet.component';
import { PenaltyHistoryComponent } from './penalty-history/penalty-history.component';
import { ApiService } from './api.service';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'penalty-sheet', component: PenaltySheetComponent },
  { path: 'penalty-list', component: PenaltyListComponent },
  { path: 'penalty-list/:id', component: PenaltyDetailsComponent },

  { path: 'user-profile', component: UserProfileComponent },
  { path: 'penalty-list', component: PenaltyListComponent },
  { path: 'admin-penalty-sheet', component: AdminPenaltySheetComponent },
  { path: 'penalty-history', component: PenaltyHistoryComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    PoliceRegistrationComponent,
    PenalityRegistrationComponent,
    CivilianRegistrationComponent,
    HomepageComponent,
    PenaltySheetComponent,
    UserProfileComponent,
    PenaltyListComponent,
    PenaltyDetailsComponent,
    AdminPenaltySheetComponent,
    PenaltyHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppHttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],

  exports: [RouterModule],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
