import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

const routes: Routes = [];

@NgModule({
    imports: [
        CommonModule,
        RouterModule

    ],
    declarations: [
      HomeFooterComponent,
      HomeHeaderComponent,
    ],
    exports: [
        CommonModule,
        HomeFooterComponent,
        HomeHeaderComponent,
    ],

})
export class SharedUIModule { }
