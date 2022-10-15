import { Component, Input } from '@angular/core';
import { Category } from '../../../app/models/category';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css'],
})
export class PageTitleComponent {
  @Input() title: string | undefined;
  @Input() category: Category | undefined;
}
