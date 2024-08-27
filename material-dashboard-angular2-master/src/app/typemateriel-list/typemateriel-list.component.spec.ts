import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypematerielListComponent } from './typemateriel-list.component';

describe('TypematerielListComponent', () => {
  let component: TypematerielListComponent;
  let fixture: ComponentFixture<TypematerielListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypematerielListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypematerielListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
