import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

const routes: Routes = [];

@NgModule({
    imports: [
        CommonModule,
        RouterModule

    ],
    declarations: [
      AdminHeaderComponent,
      AdminSidebarComponent,
    ],
    exports: [
        CommonModule,
        AdminHeaderComponent,
      AdminSidebarComponent,
    ],

})
export class AdminSharedUIModule { }
