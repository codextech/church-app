import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingLayoutModule } from './layout/landing-layout/landing-layout.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxUiLoaderConfig, SPINNER, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ApiInterceptor } from './_services/api-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 25,
  acceptedFiles: 'image/*'
};


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#ff5656',
  fgsSize: 50,
  overlayColor: '#353e6b',
  fgsType: SPINNER.threeBounce,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingLayoutModule,
    AdminModule,
    HttpClientModule,
    AdminLayoutModule,
    MainModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule, // required animations ToastrModule module

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
