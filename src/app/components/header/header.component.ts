import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input('data') headerData: any;
  headerTitle: String = '';
  headerIcon: String = '';

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
        this.headerTitle = this.headerData[0].title;
        this.headerIcon = this.headerData[0].icon;
    }, 10);
  }

}
