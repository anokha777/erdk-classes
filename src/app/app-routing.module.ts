import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ClassTenComponent } from './downloads/class-ten/class-ten.component';
import { ClassElevenComponent } from './downloads/class-eleven/class-eleven.component';
import { ClassTwelveComponent } from './downloads/class-twelve/class-twelve.component';
import { ClassCompetitionComponent } from './downloads/class-competition/class-competition.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './about/organization/organization.component';
import { WhyErdkComponent } from './about/why-erdk/why-erdk.component';
import { AboutErdkComponent } from './about/about-erdk/about-erdk.component';
import { DirectorMessageComponent } from './about/director-message/director-message.component';
import { BatchesComponent } from './batches/batches.component';
import { BatchClassTenComponent } from './batches/batch-class-ten/batch-class-ten.component';
import { BatchClassElevenComponent } from './batches/batch-class-eleven/batch-class-eleven.component';
import { BatchClassTwelveComponent } from './batches/batch-class-twelve/batch-class-twelve.component';
import { BatchCompetitionComponent } from './batches/batch-competition/batch-competition.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'downloads', component: DownloadsComponent },
  { path: 'downloads/ten', component: ClassTenComponent },
  { path: 'downloads/eleven', component: ClassElevenComponent },
  { path: 'downloads/twelve', component: ClassTwelveComponent },
  { path: 'downloads/competition', component: ClassCompetitionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/organization', component: OrganizationComponent },
  { path: 'about/why-erdk', component: WhyErdkComponent },
  { path: 'about/about-erdk', component: AboutErdkComponent },
  { path: 'about/director-msg', component: DirectorMessageComponent},
  { path: 'batches', component: BatchesComponent },
  { path: 'batches/ten', component: BatchClassTenComponent },
  { path: 'batches/eleven', component: BatchClassElevenComponent },
  { path: 'batches/twelve', component: BatchClassTwelveComponent },
  { path: 'batches/competition', component: BatchCompetitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
