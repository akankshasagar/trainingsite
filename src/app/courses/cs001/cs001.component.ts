import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  constructor(private auth: AuthService) { }

  toggleDrawer() {
    this.drawerState = this.drawerState === 'closed' ? 'open' : 'closed';
  }

  logout(){
    this.auth.signOut();
  }
}
