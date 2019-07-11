import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { SharedUIModule } from 'src/app/main/shared-ui/shared-ui.module';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedUIModule
    ],
    declarations: [
      LandingLayoutComponent
    ],

})
export class LandingLayoutModule { }
