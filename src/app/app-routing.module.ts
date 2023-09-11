
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Replace with the actual login component
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Other routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Replace with the actual login component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
