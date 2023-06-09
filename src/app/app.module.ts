import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { FeedbackBoxComponent } from './pages/testimonial/feedback-box/feedback-box.component';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { EnqiryFormComponent } from './pages/home/enqiry-form/enqiry-form.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { FeedbackFormComponent } from './pages/testimonial/feedback-form/feedback-form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [

    
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    TestimonialComponent,
    ContactComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    FeedbackBoxComponent,
    QuoteitPipe,
    TypefilterPipe,
    EnqiryFormComponent,
    DetailsComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
