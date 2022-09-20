import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAdministrarComponent } from './animal-administrar.component';

describe('AnimalAdministrarComponent', () => {
  let component: AnimalAdministrarComponent;
  let fixture: ComponentFixture<AnimalAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
