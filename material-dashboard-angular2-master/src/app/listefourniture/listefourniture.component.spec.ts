import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefournitureComponent } from './listefourniture.component';

describe('ListefournitureComponent', () => {
  let component: ListefournitureComponent;
  let fixture: ComponentFixture<ListefournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefournitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListefournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
