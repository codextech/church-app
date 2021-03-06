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
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './_guards/auth.guard';
import { AuthorizationGuard } from './_guards/authorization.guard';
import { UserAuthService } from './_services/user-auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { TableModule } from 'ngx-easy-table';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 500,
  acceptedFiles: 'image/*, video/*'
};
 // reqiur in all app Globally function
 export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#fbe80ef5',
  fgsSize: 50,
  overlayColor: '#465eb6',
  fgsType: SPINNER.fadingCircle,
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
    AuthModule,
    HttpClientModule,
    AdminLayoutModule,
    MainModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule, // required animations ToastrModule module
    NgxPaginationModule,
    TableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        blacklistedRoutes: [`${environment}api/auth`]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG},
    UserAuthService,
    AuthGuard,
    AuthorizationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
