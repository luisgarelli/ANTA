import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesListarComponent } from './animales-listar.component';

describe('AnimalesListarComponent', () => {
  let component: AnimalesListarComponent;
  let fixture: ComponentFixture<AnimalesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
