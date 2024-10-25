import { Component } from '@angular/core';
import PassgenComponent from "./passgen/passgen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PassgenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passgenerator';
}
