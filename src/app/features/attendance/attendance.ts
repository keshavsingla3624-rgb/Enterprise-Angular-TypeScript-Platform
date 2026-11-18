import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class AttendanceComponent {
  attendanceRecords = [
    { id: 1, name: 'Rahul Sharma', class: '10th A', date: '18 Nov 2026', status: 'Present' },
    { id: 2, name: 'Priya Verma', class: '9th B', date: '18 Nov 2026', status: 'Present' },
    { id: 3, name: 'Amit Kumar', class: '8th A', date: '18 Nov 2026', status: 'Absent' },
    { id: 4, name: 'Neha Singh', class: '10th C', date: '18 Nov 2026', status: 'Present' },
    { id: 5, name: 'Karan Mehta', class: '7th B', date: '18 Nov 2026', status: 'Late' }
  ];
get presentCount(): number {
  return this.attendanceRecords.filter(r => r.status === 'Present').length;
}

get absentCount(): number {
  return this.attendanceRecords.filter(r => r.status === 'Absent').length;
}
}
