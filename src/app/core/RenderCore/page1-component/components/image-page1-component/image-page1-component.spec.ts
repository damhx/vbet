import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePage1Component } from './image-page1-component';

describe('ImagePage1Component', () => {
  let component: ImagePage1Component;
  let fixture: ComponentFixture<ImagePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
