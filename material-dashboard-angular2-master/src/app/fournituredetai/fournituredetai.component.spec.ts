import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournituredetaiComponent } from './fournituredetai.component';

describe('FournituredetaiComponent', () => {
  let component: FournituredetaiComponent;
  let fixture: ComponentFixture<FournituredetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournituredetaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournituredetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
