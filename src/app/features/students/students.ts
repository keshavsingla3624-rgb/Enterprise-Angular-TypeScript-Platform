import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class StudentsComponent {
  students = [
    { id: 1, name: 'Rahul Sharma', class: '10th', section: 'A', email: 'rahul@gmail.com', status: 'Active' },
    { id: 2, name: 'Priya Verma', class: '9th', section: 'B', email: 'priya@gmail.com', status: 'Active' },
    { id: 3, name: 'Amit Kumar', class: '8th', section: 'A', email: 'amit@gmail.com', status: 'Inactive' },
    { id: 4, name: 'Neha Singh', class: '10th', section: 'C', email: 'neha@gmail.com', status: 'Active' },
    { id: 5, name: 'Karan Mehta', class: '7th', section: 'B', email: 'karan@gmail.com', status: 'Active' }
  ];
}
