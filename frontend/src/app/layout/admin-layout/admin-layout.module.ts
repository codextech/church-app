import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedUIModule } from 'src/app/main/shared-ui/shared-ui.module';
import { NoLayoutComponent } from './no-layout/no-layout.component';
import { AdminSharedUIModule } from 'src/app/admin/admin-shared-ui/admin-shared-ui.module';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminSharedUIModule
    ],
    declarations: [
      AdminLayoutComponent,
      NoLayoutComponent
    ],

})
export class AdminLayoutModule { }
