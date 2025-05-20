import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGalleryComponent } from './food-gallery.component';

describe('FoodGalleryComponent', () => {
  let component: FoodGalleryComponent;
  let fixture: ComponentFixture<FoodGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodGalleryComponent]
    });
    fixture = TestBed.createComponent(FoodGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
