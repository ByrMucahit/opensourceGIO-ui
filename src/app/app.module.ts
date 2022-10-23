import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ImportComponent } from './import/import.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { IssueListComponent } from './issues/issue-list/issue-list.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import { AcceptComponent } from './challenges/accept/accept.component';
import { RejectComponent } from './challenges/reject/reject.component';
import { ChallengeListComponent } from './challenges/challenge-list/challenge-list.component';
import { ToastrModule } from 'ngx-toastr';
import { StatusComponent } from './badges/status/status.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GithubCallbackComponent } from './auth/github-callback/github-callback.component';
import {PermissionService} from "./_services/permission.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [PermissionService]},
  {path: 'import', component: ImportComponent, canActivate: [PermissionService]},
  {path: 'repository/:id/issues', component: IssueListComponent, canActivate: [PermissionService]},
  {path: 'challenge/:id/accept', component: AcceptComponent, canActivate: [PermissionService]},
  {path: 'challenge/:id/reject', component: RejectComponent, canActivate: [PermissionService]},
  {path: 'challenges', component: ChallengeListComponent, canActivate: [PermissionService]},
  {path: 'signin', component: SigninComponent},
  {path: 'auth/github/callback', component: GithubCallbackComponent, canActivate: [PermissionService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent,
    IssueListComponent,
    AcceptComponent,
    RejectComponent,
    ChallengeListComponent,
    StatusComponent,
    SigninComponent,
    GithubCallbackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
