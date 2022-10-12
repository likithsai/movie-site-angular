import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input('data') headerData: any;
  headerTitle: String = '';

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
        this.headerTitle = this.headerData[0].title;
    }, 100);
  }

}
