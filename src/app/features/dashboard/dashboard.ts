import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  stats = [
    {
      title: 'Total Students',
      value: '1,250',
      icon: 'bi-people',
      color: 'blue',
      change: '+12%'
    },
    {
      title: 'Total Teachers',
      value: '85',
      icon: 'bi-person-workspace',
      color: 'purple',
      change: '+5%'
    },
    {
      title: 'Attendance Today',
      value: '94%',
      icon: 'bi-calendar-check',
      color: 'green',
      change: '+3%'
    },
    {
      title: 'Fees Collected',
      value: '₹8.5L',
      icon: 'bi-wallet2',
      color: 'orange',
      change: '+8%'
    }
  ];

  activities = [
    { name: 'Rahul Sharma', action: 'New student registered', time: '10 minutes ago' },
    { name: 'Priya Verma', action: 'Attendance marked', time: '30 minutes ago' },
    { name: 'Amit Kumar', action: 'Fee payment received', time: '1 hour ago' },
    { name: 'Neha Singh', action: 'Teacher record updated', time: '2 hours ago' }
  ];

}
