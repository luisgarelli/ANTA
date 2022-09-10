import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosHistorialComponent } from './autos-historial.component';

describe('AutosHistorialComponent', () => {
  let component: AutosHistorialComponent;
  let fixture: ComponentFixture<AutosHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
