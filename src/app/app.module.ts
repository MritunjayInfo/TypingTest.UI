import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { AdvancedTestComponent } from './advanced-test/advanced-test.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestDurationComponent } from './test-duration/test-duration.component';
import { TestBoxComponent } from './test-box/test-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    SimpleTestComponent,
    AdvancedTestComponent,
    StatisticsComponent,
    AboutusComponent,
    ProfileComponent,
    PageNotFoundComponent,
    TestDurationComponent,
    TestBoxComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
