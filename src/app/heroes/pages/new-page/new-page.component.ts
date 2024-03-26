import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit {

  public publischers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
