import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExtrasComponent } from './formulario-extras.component';

describe('FormularioExtrasComponent', () => {
  let component: FormularioExtrasComponent;
  let fixture: ComponentFixture<FormularioExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
