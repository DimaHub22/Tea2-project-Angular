import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";


import { LayoutComponent } from './feature/layout.component';
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {SearchComponent} from "./shared/layout/search/search.component";
import {ReactiveFormsModule} from "@angular/forms";



registerLocaleData(localeRu)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SearchComponent,

  ],

  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
