import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyjseditorComponent } from './surveyjseditor.component';
import { AppComponent } from './app.component';
import { SurveydemoComponent } from './surveydemo/surveydemo.component';
import { AngularformComponent } from './angularform/angularform.component';

const routes: Routes = [
  { path: '', redirectTo: 'surveyapp', pathMatch: 'full' },
  { path: 'surveyapp', component: SurveydemoComponent },
  { path: 'creator', component: SurveyjseditorComponent },
  { path: 'angform', component: AngularformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
