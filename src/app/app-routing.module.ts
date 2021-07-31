import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StyleOptionsComponent } from './style-options/style-options.component';
import { StyleComponent } from './style/style.component';

const routes: Routes = [
  // { path: '**', component:  StyleComponent},
  { path: '', component: StyleComponent },
  { path: 'style/', component: StyleComponent },
  { path: 'style/:category', component: StyleOptionsComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
