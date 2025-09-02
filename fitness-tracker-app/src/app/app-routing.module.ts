import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'onboard1',
    pathMatch: 'full'
  },
  {
    path: 'onboard1',
    loadChildren: () => import('./onboard1/onboard1.module').then( m => m.Onboard1PageModule)
  },
  {
    path: 'onboard2',
    loadChildren: () => import('./onboard2/onboard2.module').then( m => m.Onboard2PageModule)
  },
  {
    path: 'onboard3',
    loadChildren: () => import('./onboard3/onboard3.module').then( m => m.Onboard3PageModule)
  },
  {
    path: 'onboard4',
    loadChildren: () => import('./onboard4/onboard4.module').then( m => m.Onboard4PageModule)
  },
  {
    path: 'onboard5',
    loadChildren: () => import('./onboard5/onboard5.module').then( m => m.Onboard5PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'moreinfo',
    loadChildren: () => import('./moreinfo/moreinfo.module').then( m => m.MoreinfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'a1',
    loadChildren: () => import('./a1/a1.module').then( m => m.A1PageModule)
  },
  {
    path: 'workout-track',
    loadChildren: () => import('./workout-track/workout-track.module').then( m => m.WorkoutTrackPageModule)
  },
  {
    path: 'sleep-track',
    loadChildren: () => import('./sleep-track/sleep-track.module').then( m => m.SleepTrackPageModule)
  },
  {
    path: 'meal-plan',
    loadChildren: () => import('./meal-plan/meal-plan.module').then( m => m.MealPlanPageModule)
  },
  {
    path: 'fullboodywork',
    loadChildren: () => import('./fullboodywork/fullboodywork.module').then( m => m.FullboodyworkPageModule)
  },
  {
    path: 'sleep-schedule',
    loadChildren: () => import('./sleep-schedule/sleep-schedule.module').then( m => m.SleepSchedulePageModule)
  },
  {
    path: 'add-alarm',
    loadChildren: () => import('./add-alarm/add-alarm.module').then( m => m.AddAlarmPageModule)
  },
  {
    path: 'workout-schedule',
    loadChildren: () => import('./workout-schedule/workout-schedule.module').then( m => m.WorkoutSchedulePageModule)
  },
  {
    path: 'addworkout-schedule',
    loadChildren: () => import('./addworkout-schedule/addworkout-schedule.module').then( m => m.AddworkoutSchedulePageModule)
  },
  {
    path: 'meal-schedule',
    loadChildren: () => import('./meal-schedule/meal-schedule.module').then( m => m.MealSchedulePageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'oauth-callback',
    loadChildren: () => import('./oauth-callback/oauth-callback.module').then( m => m.OauthCallbackPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
