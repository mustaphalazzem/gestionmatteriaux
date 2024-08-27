import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypematerielComponent } from './ajout-typemateriel.component';

describe('AjoutTypematerielComponent', () => {
  let component: AjoutTypematerielComponent;
  let fixture: ComponentFixture<AjoutTypematerielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTypematerielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTypematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
