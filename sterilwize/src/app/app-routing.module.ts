import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VideosComponent } from './videos/videos.component';
import { WhySterilwizeComponent } from './why-sterilwize/why-sterilwize.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { SolutionComponent } from './solution/solution.component';
import { WhatIsSterilWizeComponent } from './what-is-steril-wize/what-is-steril-wize.component';
import { TheSystemComponent } from './the-system/the-system.component';
import { TrainingComponent } from './training/training.component';
import { ContinuingEducationComponent } from './continuing-education/continuing-education.component';
import { FAQsComponent } from './faqs/faqs.component';
import { TestimonailsComponent } from './testimonails/testimonails.component';
import { SupportComponent } from './support/support.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { BookAConsultDemoComponent } from './book-a-consult-demo/book-a-consult-demo.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'why-sterilwize', component: WhySterilwizeComponent},
  { path: 'mission', component: MissionComponent},
  { path: 'team', component: TeamComponent },
  { path: 'solution', component: SolutionComponent},
  { path: 'what-is-steril-wize', component: WhatIsSterilWizeComponent},
  { path: 'the-system', component: TheSystemComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'continuing-education', component: ContinuingEducationComponent},
  { path: 'faqs', component: FAQsComponent},
  { path: 'testimonails', component: TestimonailsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'book-a-consult-demo', component: BookAConsultDemoComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

