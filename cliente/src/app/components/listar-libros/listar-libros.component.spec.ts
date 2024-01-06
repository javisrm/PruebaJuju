import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLibrosComponent } from './listar-libros.component';

describe('ListarlibrosComponent', () => {
  let component: ListarLibrosComponent;
  let fixture: ComponentFixture<ListarLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLibrosComponent]
    });
    fixture = TestBed.createComponent(ListarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
