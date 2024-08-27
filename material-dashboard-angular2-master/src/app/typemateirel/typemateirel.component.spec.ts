import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemateirelComponent } from './typemateirel.component';

describe('TypemateirelComponent', () => {
  let component: TypemateirelComponent;
  let fixture: ComponentFixture<TypemateirelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypemateirelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypemateirelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
