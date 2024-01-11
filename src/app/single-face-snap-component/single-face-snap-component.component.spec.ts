import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceSnapComponentComponent } from './single-face-snap-component.component';

describe('SingleFaceSnapComponentComponent', () => {
  let component: SingleFaceSnapComponentComponent;
  let fixture: ComponentFixture<SingleFaceSnapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleFaceSnapComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleFaceSnapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
