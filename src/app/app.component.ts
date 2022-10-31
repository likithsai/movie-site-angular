import { Component, OnInit } from '@angular/core';
import { JSONService } from './services/jsonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  headerData: any;
  footerData: any;
  contentData: any;

  constructor(private data: JSONService) {}

  ngOnInit(): void {
      this.data.getData().subscribe(data => {
          this.headerData = data.header;
          this.contentData = data.content;
          this.footerData = data.footer;
      });
  }
}
