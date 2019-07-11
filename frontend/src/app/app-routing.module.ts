import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LANDING_LAYOUTS_ROUTES } from './layout/landing-layout/landingLayout.routes';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ADMIN_LAYOUTS_ROUTES } from './layout/admin-layout/adminLayout.routes';

const routes: Routes = [

  {path: '', component: LandingLayoutComponent,
  children: LANDING_LAYOUTS_ROUTES
  },

  {path: '', component: AdminLayoutComponent,
  children: ADMIN_LAYOUTS_ROUTES
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
