import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage ,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('src/app/activity/activity.module').then((m) => m.ActivityPageModule ),
      },
      {
        path: 'camera',
        loadChildren: () =>
          import('src/app/camera/camera.module').then((m) => m.CameraPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('src/app/profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
