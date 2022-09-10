import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAdministrarComponent } from './slot-administrar.component';

describe('SlotAdministrarComponent', () => {
  let component: SlotAdministrarComponent;
  let fixture: ComponentFixture<SlotAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
