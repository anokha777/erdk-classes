import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BannerCarouselComponent } from './home/banner-carousel/banner-carousel.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { InfoWithImageComponent } from './home/info-with-image/info-with-image.component';
import { MackbookImageInfoComponent } from './home/mackbook-image-info/mackbook-image-info.component';
import { SuccessInfoBannerComponent } from './home/success-info-banner/success-info-banner.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
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
import { NotificationsComponent } from './notifications/notifications.component';
import { FeeComponent } from './fee/fee.component';
import { TestEvaluationComponent } from './test-evaluation/test-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    BackToTopComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BannerCarouselComponent,
    HomeBodyComponent,
    InfoWithImageComponent,
    MackbookImageInfoComponent,
    SuccessInfoBannerComponent,
    TestimonialComponent,
    DownloadsComponent,
    ClassTenComponent,
    ClassElevenComponent,
    ClassTwelveComponent,
    ClassCompetitionComponent,
    AboutComponent,
    OrganizationComponent,
    WhyErdkComponent,
    AboutErdkComponent,
    DirectorMessageComponent,
    BatchesComponent,
    BatchClassTenComponent,
    BatchClassElevenComponent,
    BatchClassTwelveComponent,
    BatchCompetitionComponent,
    NotificationsComponent,
    FeeComponent,
    TestEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
