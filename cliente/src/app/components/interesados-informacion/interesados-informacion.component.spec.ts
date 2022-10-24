import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresadosInformacionComponent } from './interesados-informacion.component';

describe('InteresadosInformacionComponent', () => {
  let component: InteresadosInformacionComponent;
  let fixture: ComponentFixture<InteresadosInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresadosInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresadosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
