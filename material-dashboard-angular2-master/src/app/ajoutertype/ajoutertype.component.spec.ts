import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertypeComponent } from './ajoutertype.component';

describe('AjoutertypeComponent', () => {
  let component: AjoutertypeComponent;
  let fixture: ComponentFixture<AjoutertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutertypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
