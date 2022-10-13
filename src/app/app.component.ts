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

  constructor(private data: JSONService) {}

  ngOnInit(): void {
      this.data.getData().subscribe(data => {
          this.headerData = data.header;
          this.footerData = data.footer;
      });
  }
}
