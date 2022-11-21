import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  // navigationList: Navigation[];

  navigationList = [
    {
      name: 'simple test',
      path: 'simple',
    },
    {
      name: 'advanced test',
      path: 'advanced',
    },
    {
      name: 'statistics',
      path: 'statistics',
    },
    {
      name: 'about us',
      path: 'aboutus',
    },
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
