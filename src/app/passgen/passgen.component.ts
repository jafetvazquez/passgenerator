import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.css'
})
export default class PassgenComponent implements OnInit {

  constructor(private clipboard: Clipboard) {}

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

  // Number of characters and void String
  public numCar: number = 12;
  public newString: string = "";

  // Define the characters for the password
  public upperCase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  public lowerCase: string = "abcdefghijklmnopqrstuvwxyz";
  public numbers: string = "0123456789";
  public speChar: string = "!@#$%&*()_-+=<>?";

  public upperCaseAgain: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  public lowerCaseAgain: string = "abcdefghijklmnopqrstuvwxyz";
  public numbersAgain: string = "0123456789";
  public speCharAgain: string = "!@#$%&*()_-+=<>?";

  // values of checkboxes
  public checkboxValue: boolean = true;
  public checkboxValue2: boolean = true;
  public checkboxValue3: boolean = true;
  public checkboxValue4: boolean = true;

  // Disable input of special characters
  public isDisabled: boolean = false;

  // Length of the checkboxes
  private getSelectedCount(): number {
    return [
      this.checkboxValue,
      this.checkboxValue2,
      this.checkboxValue3,
      this.checkboxValue4,
    ].filter(selected => selected).length;
  }

  // Funtion to change the value of checkbox if the others are disabled
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

  // Funtion to change de password if the number of characters change
  onChangeLength(): void{

    if(this.numCar === 0 || this.numCar === null || this.numCar < 0){
      this.msgAlert('error', 'Ingrese un número válido');
    }

    if(this.numCar > 0){
      this.newString = this.shuffle(this.numCar);

      if(this.numCar > 50){
        this.msgAlert('error', 'Máximo 50 caracteres');
        this.newString = this.newString.substring(0, 50);
        this.reload();
      }

    }else{
      this.newString = '';
    }

    this.reload();
  }

  // Funtion to disable the Uppercase checkbox
  onCheckUpper(){

    if(this.checkboxValue === false){
      this.upperCase = this.upperCase.includes(this.upperCase)? '' : this.upperCase;
    }else{
      this.upperCase = this.upperCaseAgain;
    }

    //this.onBoxChange();
    this.reload();
  }

  // function to disable the lowercase chackbox
  onCheckLower(){

    if(this.checkboxValue2 === false){
      this.lowerCase = this.lowerCase.includes(this.lowerCase)? '' : this.lowerCase;
    }else{
      this.lowerCase = this.lowerCaseAgain;
    }

    this.reload();
  }

  // function to disable the number characters checkbox
  onCheckNumber(){

    if(this.checkboxValue3 === false){
      this.numbers = this.numbers.includes(this.numbers)? '' : this.numbers;
    }else{
      this.numbers = this.numbersAgain;
    }

    this.reload();
  }

  // function to disable the special characters checkbox
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

  // funtion to reload the possword generator
  reload() {

    const reset = this.shuffle(this.numCar);
    //console.log(this.newString, this.newString.length);
    //console.log(this.speChar);
    

    return reset
    
  }



  // NgonInit

  // ngOnInit to init the app with a password generated
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reload();
    //this.msgAlert('error', 'error')

    //console.log(this.newString, this.newString.length);
    
    
  }

  // function to copy the result of the password generated
  copyPass(): void{
    this.clipboard.copy(this.newString);
    this.msgAlert('success', 'Password copiado correctamente!');
  }

  // funtion to create an alert
  msgAlert = (icon: any, title: any) => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: title
    })

  }

}
