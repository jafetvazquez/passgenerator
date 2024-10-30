import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css'
})
export default class PassgenComponent implements OnInit {

  // Define the possible characters for the password
  private shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  
  private num: string = "njfdbnjfj";
  private str: string = "hola";
  private str2: string = "ov";
  
  private search = this.num + this.str + this.str2;
  private idle = this.search.split("");
  public shu: any = this.shuffle(this.idle);
  

  reload() {
    window.location.reload();
  }

  // NgonInit

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
    
  }

  

}
