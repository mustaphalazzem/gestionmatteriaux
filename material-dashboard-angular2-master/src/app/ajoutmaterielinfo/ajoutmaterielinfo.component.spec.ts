import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmaterielinfoComponent } from './ajoutmaterielinfo.component';

describe('AjoutmaterielinfoComponent', () => {
  let component: AjoutmaterielinfoComponent;
  let fixture: ComponentFixture<AjoutmaterielinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmaterielinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutmaterielinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
