import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {
  schoolName = 'ABC Public School';
  email = 'info@abcschool.com';
  phone = '9876543210';
  address = 'Jalandhar, Punjab';
  academicYear = '2026-2027';
}
