import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ClassTenComponent } from './downloads/class-ten/class-ten.component';
import { ClassElevenComponent } from './downloads/class-eleven/class-eleven.component';
import { ClassTwelveComponent } from './downloads/class-twelve/class-twelve.component';
import { ClassCompetitionComponent } from './downloads/class-competition/class-competition.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'downloads', component: DownloadsComponent
  // ,
  // children: [
  //   { path: 'ten', component: ClassTenComponent },
  //   { path: 'eleven', component: ClassElevenComponent },
  //   { path: 'twelve', component: ClassTwelveComponent },
  //   { path: 'competition', component: ClassCompetitionComponent }
  // ]
  },
  { path: 'downloads/ten', component: ClassTenComponent },
  { path: 'downloads/eleven', component: ClassElevenComponent },
  { path: 'downloads/twelve', component: ClassTwelveComponent },
  { path: 'downloads/competition', component: ClassCompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
