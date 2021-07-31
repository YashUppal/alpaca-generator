import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { AccessorizeComponent } from './accessorize/accessorize.component';
import { StyleComponent } from './style/style.component';
import { StyleOptionsComponent } from './style-options/style-options.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    AccessorizeComponent,
    StyleComponent,
    StyleOptionsComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
