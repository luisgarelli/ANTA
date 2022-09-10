import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesRegistrarComponent } from './animales-registrar.component';

describe('AnimalesRegistrarComponent', () => {
  let component: AnimalesRegistrarComponent;
  let fixture: ComponentFixture<AnimalesRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
