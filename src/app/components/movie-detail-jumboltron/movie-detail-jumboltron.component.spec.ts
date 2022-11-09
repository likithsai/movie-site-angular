import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailJumboltronComponent } from './movie-detail-jumboltron.component';

describe('MovieDetailJumboltronComponent', () => {
  let component: MovieDetailJumboltronComponent;
  let fixture: ComponentFixture<MovieDetailJumboltronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailJumboltronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailJumboltronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
