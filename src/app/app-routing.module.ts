
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Replace with the actual login component

const routes: Routes = [
  // Other routes
  { path: 'login', component: LoginComponent }, // Replace with the actual login component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
