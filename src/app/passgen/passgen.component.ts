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
  private shuffle(numCar: number): any {

    let result: string = "";
    
    for (let i = 0; i < numCar; i++) { 

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

  public checkboxValue: boolean = true;
  public checkboxValue2: boolean = true;
  public checkboxValue3: boolean = true;
  public checkboxValue4: boolean = true;

  private getSelectedCount(): number {
    return [
      this.checkboxValue,
      this.checkboxValue2,
      this.checkboxValue3,
      this.checkboxValue4,
    ].filter(selected => selected).length;
  }

  onBoxChange(): void{
    const selectedBox = this.getSelectedCount();

    if(selectedBox === 0){
      this.checkboxValue = true;
    }
  }

  /*private search = this.upperCase + this.lowerCase + this.numbers + this.speChar;
  private idle = this.search.split("");
  public shu: string[] = this.shuffle(this.idle);
  public noComas: string = this.shu.join('');
  public len = this.noComas.length;*/
  
  onChangeLength(): void{
    if(this.numCar > 0){
      this.newString = this.shuffle(this.numCar);
    }else{
      this.newString = '';
    }

    this.reload();
  }

  onChangeSpeChar(): void{

  }

  onCheckUpper(){
    this.upperCase = this.upperCase.includes(this.upperCase)? '' : this.upperCase;
    //this.onBoxChange();
    this.reload();
  }

  onCheckLower(){
    this.lowerCase = this.lowerCase.includes(this.lowerCase)? '' : this.lowerCase;
    this.reload();
  }

  onCheckNumber(){
    this.numbers = this.numbers.includes(this.numbers)? '' : this.numbers;
    this.reload();
  }

  onCheckSpeChar(){
    const specialChar = this.speChar;
    specialChar.includes(specialChar)? '' : this.speChar;
    this.reload();
  }

  reload() {

    const reset = this.shuffle(this.numCar);
    console.log(this.newString, this.newString.length);
    console.log(this.speChar);
    

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
