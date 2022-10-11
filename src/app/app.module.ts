import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageSectionComponent } from './sections/home-page-section/home-page-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { MovieDetailSectionComponent } from './sections/movie-detail-section/movie-detail-section.component';

const routes: Routes = [
  { path: '', component: HomePageSectionComponent },
  { path: 'movie/:movieid', component: MovieDetailSectionComponent },
  { path: 'about', component: AboutSectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageSectionComponent,
    AboutSectionComponent,
    MovieDetailSectionComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
