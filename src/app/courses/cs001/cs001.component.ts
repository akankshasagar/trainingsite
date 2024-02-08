import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-cs001',
  templateUrl: './cs001.component.html',
  styleUrls: ['./cs001.component.css'],
  animations: [
    trigger('drawerAnimation', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CS001Component {
  drawerState = 'closed';
  public fullName: string = "";

  constructor(private auth: AuthService, private userStore: UserstoreService) { 
    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        let fullNameFromToken = this.auth.getFullNameFromToken();
        this.fullName = val || fullNameFromToken
      })
  }

  toggleDrawer() {
    this.drawerState = this.drawerState === 'closed' ? 'open' : 'closed';
  }

  logout(){
    this.auth.signOut();
  }
}
