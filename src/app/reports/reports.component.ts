import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportMainPageComponent } from 'projects/active-reports-tool/src/public-api';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,ReportMainPageComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

}
