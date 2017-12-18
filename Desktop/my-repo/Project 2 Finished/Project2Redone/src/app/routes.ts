import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { UserPanelComponent } from './components/userpanel/userpanel.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'userpanel',
    component: UserPanelComponent,
  }
];
