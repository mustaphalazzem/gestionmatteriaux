import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielajoutComponent } from './materielajout.component';

describe('MaterielajoutComponent', () => {
  let component: MaterielajoutComponent;
  let fixture: ComponentFixture<MaterielajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielajoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
