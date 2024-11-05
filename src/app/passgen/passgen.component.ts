import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css'
})
export default class PassgenComponent implements OnInit {

  // Define the possible characters for the password
  private shuffle() {

    let result: string = "";
    
    for (let i = 0; i < this.numCar; i++) { 

      // crear const de string
      const upperCase: string = this.upperCase;
      const lowerCase: string = this.lowerCase;
      const numbers: string = this.numbers;
      const speChar: string = this.speChar;

      // juntar strings
      const search = upperCase + lowerCase + numbers + speChar;
      const idle = search.split("");

      //const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      
      const j = Math.floor(Math.random() * search.length); 
      result += search[j];
    } 
    //return array; 
    this.newString = result;
  }; 


  public numCar: number = 12;
  public newString: string = "";

  public upperCase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  public lowerCase: string = "abcdefghijklmnopqrstuvwxyz";
  public numbers: string = "0123456789";
  public speChar: string = "!@#$%^&*()_-+=<>?";
  
  /*private search = this.upperCase + this.lowerCase + this.numbers + this.speChar;
  private idle = this.search.split("");
  public shu: string[] = this.shuffle(this.idle);
  public noComas: string = this.shu.join('');
  public len = this.noComas.length;*/
  

  reload() {

    const reset = this.shuffle();
    console.log(this.newString, this.newString.length);
    

    return reset
    
  }

  // NgonInit

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reload()

    //console.log(this.newString, this.newString.length);
    
    
  }

  

}
