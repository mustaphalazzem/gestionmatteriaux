import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformatachatComponent } from './addformatachat.component';

describe('AddformatachatComponent', () => {
  let component: AddformatachatComponent;
  let fixture: ComponentFixture<AddformatachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformatachatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformatachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
