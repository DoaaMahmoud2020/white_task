import { Component,input } from '@angular/core';

@Component({
  selector: 'app-spinner-loading',
  standalone: true,
  imports: [],
  templateUrl: './spinner-loading.component.html',
  styleUrl: './spinner-loading.component.scss',
})
export class SpinnerLoadingComponent {
  color = input<string>();
}
