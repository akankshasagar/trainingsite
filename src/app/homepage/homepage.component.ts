import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  opened= true;
  isCardVisible = true;
  isLoading = true;  
  isFirstDivClicked = false;

  setFirstDivClicked(): void {
    this.isFirstDivClicked = true;
  }

  toggleCard() {
    this.isCardVisible = !this.isCardVisible;
  }  

  ngOnInit(){
    setTimeout(() => {
      this.isLoading = false; // Set to false when loading is complete
    }, 2000);
  }  

}
