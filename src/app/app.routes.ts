import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'students',
    loadComponent: () =>
      import('./features/students/students')
        .then(m => m.StudentsComponent)
  },

  {
    path: 'teachers',
    loadComponent: () =>
      import('./features/teachers/teachers')
        .then(m => m.TeachersComponent)
  },

  {
    path: 'attendance',
    loadComponent: () =>
      import('./features/attendance/attendance')
        .then(m => m.AttendanceComponent)
  },

  {
    path: 'fees',
    loadComponent: () =>
      import('./features/fees/fees')
        .then(m => m.FeesComponent)
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings')
        .then(m => m.SettingsComponent)
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
