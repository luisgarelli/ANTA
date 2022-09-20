import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosAdministrarComponent } from './autos-administrar.component';

describe('AutosAdministrarComponent', () => {
  let component: AutosAdministrarComponent;
  let fixture: ComponentFixture<AutosAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
