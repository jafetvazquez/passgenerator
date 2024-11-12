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
  public speChar: string = "!@#$%&*()_-+=<>?";

  public upperCaseAgain: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  public lowerCaseAgain: string = "abcdefghijklmnopqrstuvwxyz";
  public numbersAgain: string = "0123456789";
  public speCharAgain: string = "!@#$%&*()_-+=<>?";

  public checkboxValue: boolean = true;
  public checkboxValue2: boolean = true;
  public checkboxValue3: boolean = true;
  public checkboxValue4: boolean = true;

  public isDisabled: boolean = false;

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
      this.checkboxValue2 = false;
      this.checkboxValue3 = false;
      this.checkboxValue4 = false;
    }

    this.onCheckUpper();
    this.reload();

    console.log(selectedBox);
    
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

    if(this.checkboxValue === false){
      this.upperCase = this.upperCase.includes(this.upperCase)? '' : this.upperCase;
    }else{
      this.upperCase = this.upperCaseAgain;
    }

    //this.onBoxChange();
    this.reload();
  }

  onCheckLower(){

    if(this.checkboxValue2 === false){
      this.lowerCase = this.lowerCase.includes(this.lowerCase)? '' : this.lowerCase;
    }else{
      this.lowerCase = this.lowerCaseAgain;
    }

    this.reload();
  }

  onCheckNumber(){

    if(this.checkboxValue3 === false){
      this.numbers = this.numbers.includes(this.numbers)? '' : this.numbers;
    }else{
      this.numbers = this.numbersAgain;
    }

    this.reload();
  }

  onCheckSpeChar(){
    
    if(this.checkboxValue4 === false){
      this.speChar = this.speChar.includes(this.speChar)? '' : this.speChar;
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
      this.speChar = this.speCharAgain;
    }

    this.reload();
  }

  reload() {

    const reset = this.shuffle(this.numCar);
    //console.log(this.newString, this.newString.length);
    //console.log(this.speChar);
    

    return reset
    
  }



  // NgonInit

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reload();

    //console.log(this.newString, this.newString.length);
    
    
  }

  

}
