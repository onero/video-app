import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VideosComponent} from './videos/videos.component';
import {VideoComponent} from './videos/video/video.component';
import {VideoService} from './videos/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {VideoDetailComponent} from './videos/video-detail/video-detail.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: VideosComponent,
    data: { title: 'Videos'}
  },
  {
    path: 'video/:id',
    component: VideoDetailComponent,
    data: { title: 'Video Detail'}
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoComponent,
    PageNotFoundComponent,
    VideoDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
