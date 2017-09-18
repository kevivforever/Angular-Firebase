import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Components
import { LoginComponent} from './pages/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        canActivate: [AuthGuard],
        data: {
        title: 'Dashboard'
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
        ]
    },
    {
        path: 'login',
        component: SimpleLayoutComponent,
        data: {
        title: 'Pages'
        },
        children: [
            {
                path: '',
                component: LoginComponent,
                data: {
                title: 'Login Page'
                }
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule {}
