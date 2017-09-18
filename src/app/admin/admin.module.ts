import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
// Routes
import { AdminRoutingModule } from './admin-routing.module';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { BreadcrumbsComponent } from '../shared/breadcrumb.component';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { AsideToggleDirective } from '../shared/aside.directive';

// Components
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Service
import { AuthService } from './services/auth.service';
// Angular Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  providers: [AuthService],
  imports: [ReactiveFormsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    LoginComponent,
    DashboardComponent
  ],
  exports: [
    FullLayoutComponent
  ]
})
export class AdminModule { }
