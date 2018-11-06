import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { InfoWithImageComponent } from './info-with-image/info-with-image.component';
import { MackbookImageInfoComponent } from './mackbook-image-info/mackbook-image-info.component';
import { SuccessInfoBannerComponent } from './success-info-banner/success-info-banner.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [BannerCarouselComponent, HomeBodyComponent, InfoWithImageComponent, MackbookImageInfoComponent, SuccessInfoBannerComponent, TestimonialComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
