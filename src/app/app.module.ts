import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VideosComponent} from './videos/videos.component';
import {VideoService} from './videos/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {VideoDetailComponent} from './videos/video-detail/video-detail.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VideoCreateComponent} from './videos/video-create/video-create.component';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'videos/create',
    component: VideoCreateComponent
  },
  {
    path: 'video/:id',
    component: VideoDetailComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    PageNotFoundComponent,
    VideoDetailComponent,
    NavbarComponent,
    VideoCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
