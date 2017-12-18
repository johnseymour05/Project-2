import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {MainComponent} from './components/main/main.component'; // tells the project to look for this component

import { appRoutes } from './routes';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { ErrorComponent } from './components/error/error.component';
import { UserPanelComponent } from './components/userpanel/userpanel.component';
import { RestaurantService } from './services/restaurants/restaurants.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    ErrorComponent,
    UserPanelComponent,
   ],
  providers: [
    LoginService,
    RestaurantService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
