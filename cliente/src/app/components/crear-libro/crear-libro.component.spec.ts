import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLibroComponent } from './crear-libro.component';

describe('CrearLibroComponent', () => {
  let component: CrearLibroComponent;
  let fixture: ComponentFixture<CrearLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearLibroComponent]
    });
    fixture = TestBed.createComponent(CrearLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
