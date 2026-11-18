import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fees.html',
  styleUrl: './fees.css'
})
export class FeesComponent {
  fees = [
    { id: 1, student: 'Rahul Sharma', class: '10th A', amount: 15000, date: '15 Nov 2026', status: 'Paid' },
    { id: 2, student: 'Priya Verma', class: '9th B', amount: 12000, date: '14 Nov 2026', status: 'Paid' },
    { id: 3, student: 'Amit Kumar', class: '8th A', amount: 10000, date: 'Pending', status: 'Pending' },
    { id: 4, student: 'Neha Singh', class: '10th C', amount: 15000, date: '12 Nov 2026', status: 'Paid' },
    { id: 5, student: 'Karan Mehta', class: '7th B', amount: 9000, date: 'Pending', status: 'Pending' }
  ];

  get totalFees(): number {
    return this.fees.reduce((total, fee) => total + fee.amount, 0);
  }

  get paidFees(): number {
    return this.fees
      .filter(fee => fee.status === 'Paid')
      .reduce((total, fee) => total + fee.amount, 0);
  }

  get pendingFees(): number {
    return this.fees
      .filter(fee => fee.status === 'Pending')
      .reduce((total, fee) => total + fee.amount, 0);
  }
}
