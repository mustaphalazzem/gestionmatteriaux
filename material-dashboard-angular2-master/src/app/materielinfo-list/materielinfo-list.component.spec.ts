import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielinfoListComponent } from './materielinfo-list.component';

describe('MaterielinfoListComponent', () => {
  let component: MaterielinfoListComponent;
  let fixture: ComponentFixture<MaterielinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielinfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
