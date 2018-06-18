import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  shared: SharedService;

  constructor() {
    console.log('construtor');
    this.shared = SharedService.getInstance();
    console.log(this.shared.user);
    console.log(this.shared);
   }

  ngOnInit() {
  }

}
