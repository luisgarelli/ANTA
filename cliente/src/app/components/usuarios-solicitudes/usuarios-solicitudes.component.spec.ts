import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosSolicitudesComponent } from './usuarios-solicitudes.component';

describe('UsuariosSolicitudesComponent', () => {
  let component: UsuariosSolicitudesComponent;
  let fixture: ComponentFixture<UsuariosSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
