import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SolutionComponent } from './solution/solution.component';
import { TestimonailsComponent } from './testimonails/testimonails.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { BookAConsultDemoComponent } from './book-a-consult-demo/book-a-consult-demo.component';
import { VideosComponent } from './videos/videos.component';
import { WhySterilwizeComponent } from './why-sterilwize/why-sterilwize.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { WhatIsSterilWizeComponent } from './what-is-steril-wize/what-is-steril-wize.component';
import { TheSystemComponent } from './the-system/the-system.component';
import { TrainingComponent } from './training/training.component';
import { ContinuingEducationComponent } from './continuing-education/continuing-education.component';
import { FAQsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SolutionComponent,
    TestimonailsComponent,
    ResourcesComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    HomeComponent,
    SupportComponent,
    BookAConsultDemoComponent,
    VideosComponent,
    WhySterilwizeComponent,
    MissionComponent,
    TeamComponent,
    WhatIsSterilWizeComponent,
    TheSystemComponent,
    TrainingComponent,
    ContinuingEducationComponent,
    FAQsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
