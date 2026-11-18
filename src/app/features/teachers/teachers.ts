import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css'
})
export class TeachersComponent {
  teachers = [
    { id: 1, name: 'Anjali Sharma', subject: 'Mathematics', email: 'anjali@gmail.com', phone: '9876543210', status: 'Active' },
    { id: 2, name: 'Rohit Verma', subject: 'English', email: 'rohit@gmail.com', phone: '9876543211', status: 'Active' },
    { id: 3, name: 'Pooja Singh', subject: 'Science', email: 'pooja@gmail.com', phone: '9876543212', status: 'Active' },
    { id: 4, name: 'Aman Gupta', subject: 'Computer', email: 'aman@gmail.com', phone: '9876543213', status: 'Inactive' },
    { id: 5, name: 'Simran Kaur', subject: 'Social Studies', email: 'simran@gmail.com', phone: '9876543214', status: 'Active' }
  ];
}
