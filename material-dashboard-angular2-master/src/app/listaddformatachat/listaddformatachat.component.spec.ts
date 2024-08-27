import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaddformatachatComponent } from './listaddformatachat.component';

describe('ListaddformatachatComponent', () => {
  let component: ListaddformatachatComponent;
  let fixture: ComponentFixture<ListaddformatachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaddformatachatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaddformatachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
