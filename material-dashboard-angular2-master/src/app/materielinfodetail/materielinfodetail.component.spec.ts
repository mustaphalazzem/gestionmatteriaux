import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielinfodetailComponent } from './materielinfodetail.component';

describe('MaterielinfodetailComponent', () => {
  let component: MaterielinfodetailComponent;
  let fixture: ComponentFixture<MaterielinfodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielinfodetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielinfodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
