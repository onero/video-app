import {RouterModule} from '@angular/router';
import {VideosComponent} from './videos/videos.component';
import {VideoCreateComponent} from './videos/video-create/video-create.component';
import {VideoDetailComponent} from './videos/video-detail/video-detail.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

export const appRoutes = RouterModule.forRoot(
  [
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
  ]
);
