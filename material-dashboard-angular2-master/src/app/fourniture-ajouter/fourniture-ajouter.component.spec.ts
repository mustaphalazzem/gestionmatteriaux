import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournitureAjouterComponent } from './fourniture-ajouter.component';

describe('FournitureAjouterComponent', () => {
  let component: FournitureAjouterComponent;
  let fixture: ComponentFixture<FournitureAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournitureAjouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournitureAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
