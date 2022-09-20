import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesInformacionComponent } from './animales-informacion.component';

describe('AnimalesInformacionComponent', () => {
  let component: AnimalesInformacionComponent;
  let fixture: ComponentFixture<AnimalesInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
