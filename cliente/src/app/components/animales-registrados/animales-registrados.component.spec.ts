import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesRegistradosComponent } from './animales-registrados.component';

describe('AnimalesRegistradosComponent', () => {
  let component: AnimalesRegistradosComponent;
  let fixture: ComponentFixture<AnimalesRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesRegistradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
