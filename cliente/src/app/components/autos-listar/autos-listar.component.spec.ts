import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosListarComponent } from './autos-listar.component';

describe('AutosListarComponent', () => {
  let component: AutosListarComponent;
  let fixture: ComponentFixture<AutosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
