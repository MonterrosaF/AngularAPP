import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFormularioComponent } from './vista-formulario.component';

describe('VistaFormularioComponent', () => {
  let component: VistaFormularioComponent;
  let fixture: ComponentFixture<VistaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
