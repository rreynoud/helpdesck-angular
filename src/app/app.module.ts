import { AuthInterceptor } from './components/security/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './components/security/auth.guard'
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { routes } from './app.routes';

import { FormsModule } from '@angular/forms';
import { UserNewComponent } from './components/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [
    UserService, 
    SharedService,
    AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
