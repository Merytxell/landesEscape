import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, signal} from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatExpansionModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'

})
export class PresentationComponent {
  readonly panelOpenState = signal(false);

}
