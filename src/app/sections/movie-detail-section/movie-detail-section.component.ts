import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail-section',
  templateUrl: './movie-detail-section.component.html',
  styleUrls: ['./movie-detail-section.component.scss']
})

export class MovieDetailSectionComponent implements OnInit {
  movieId: String = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
