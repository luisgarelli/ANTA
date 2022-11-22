import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesDatosComponent } from './animales-datos.component';

describe('AnimalesDatosComponent', () => {
  let component: AnimalesDatosComponent;
  let fixture: ComponentFixture<AnimalesDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
