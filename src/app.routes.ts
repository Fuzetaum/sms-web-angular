import { Routes } from '@angular/router';

import { NonAuthenticatedLayout } from './layouts/NonAuthenticatedLayout'

import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';

export const routes: Routes = [
  {
    path: '',
    component: NonAuthenticatedLayout,
    children: [
      { path: 'signup', component: SignupPage },
      { path: '', component: LoginPage },
    ]
  },
];
