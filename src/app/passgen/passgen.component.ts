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
  
  private upperCase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private lowerCase: string = "abcdefghijklmnopqrstuvwxyz";
  private numbers: string = "0123456789"
  private speChar: string = "!@#$%^&*()_-+=<>?";
  
  private search = this.upperCase + this.lowerCase + this.numbers + this.speChar;
  private idle = this.search.split("");
  public shu: string[] = this.shuffle(this.idle);
  public noComas: string = this.shu.join('');
  public len = this.noComas.length;
  

  reload() {

    const reset = this.noComas;

    console.log(reset);
    
  }

  // NgonInit

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reload()
    
  }

  

}
