import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent {

}
