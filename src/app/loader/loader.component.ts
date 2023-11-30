import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  isLoading = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when loading is complete
    }, 2000);
  }
}
