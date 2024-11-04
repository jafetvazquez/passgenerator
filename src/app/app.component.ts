import { Component } from '@angular/core';
import PassgenComponent from "./passgen/passgen.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PassgenComponent, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passgenerator';
}
