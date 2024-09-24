import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPosterComponent } from './description-poster.component';

describe('DescriptionPosterComponent', () => {
  let component: DescriptionPosterComponent;
  let fixture: ComponentFixture<DescriptionPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionPosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});