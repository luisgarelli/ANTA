import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesEditarComponent } from './animales-editar.component';

describe('AnimalesEditarComponent', () => {
  let component: AnimalesEditarComponent;
  let fixture: ComponentFixture<AnimalesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
