import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailSectionComponent } from './movie-detail-section.component';

describe('MovieDetailSectionComponent', () => {
  let component: MovieDetailSectionComponent;
  let fixture: ComponentFixture<MovieDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
