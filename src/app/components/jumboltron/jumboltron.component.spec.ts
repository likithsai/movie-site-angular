import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboltronComponent } from './jumboltron.component';

describe('JumboltronComponent', () => {
  let component: JumboltronComponent;
  let fixture: ComponentFixture<JumboltronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboltronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboltronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
