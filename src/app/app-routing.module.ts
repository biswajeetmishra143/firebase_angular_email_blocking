import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from './student/student.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> AuthenticationModule
  },
  {
    path : "student",
    loadChildren : ()=> StudentModule,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
