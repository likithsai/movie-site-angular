import { Component, OnInit } from '@angular/core';
import { JSONService } from './services/jsonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private data: JSONService) {}

  ngOnInit(): void {
      this.data.getData().subscribe(data => {
          console.log(data);
      });
  }
  // title = 'movie-site-angular';
}
