import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceEmpleadosComponent } from './indice-empleados.component';

describe('IndiceEmpleadosComponent', () => {
  let component: IndiceEmpleadosComponent;
  let fixture: ComponentFixture<IndiceEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
