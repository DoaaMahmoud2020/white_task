import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-data.component.html',
  styleUrls: ['./not-found-data.component.scss'],
})
export class NotFoundDataComponent {
  message = input<string | undefined>('No Data Found!');
}
