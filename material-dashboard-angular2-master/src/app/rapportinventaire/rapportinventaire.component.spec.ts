import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportinventaireComponent } from './rapportinventaire.component';

describe('RapportinventaireComponent', () => {
  let component: RapportinventaireComponent;
  let fixture: ComponentFixture<RapportinventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportinventaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportinventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
